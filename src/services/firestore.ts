import firestore  from '@react-native-firebase/firestore';
import { showToast } from '@utils';

// Get all admin tasks
export const getAllAdminTasks = async (createdBy: string) => {
    try {
        const tasksSnapshot = await firestore()
            .collection('tasks')
            .where('createdBy', '==', createdBy)
            .get();
        
        const tasks = tasksSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return tasks;
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};

// Get all member tasks
export const getAllMemberTasks = async (assignTo: string) => {
    try {
        const tasksSnapshot = await firestore()
            .collection('tasks')
            .where('assignTo', '==', assignTo)
            .get();
        
        const tasks = tasksSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return tasks;
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};

// Create a new task
export const createNewTask = async (createdBy: string, assignTo: string, data: any) => {
    try {
        const newTask = {
            ...data,
            createdBy,
            assignTo,
            createdAt: firestore.FieldValue.serverTimestamp(),
        };

        const taskRef = await firestore().collection('tasks').add(newTask);
        
        return { id: taskRef.id, ...newTask };
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};

// Edit an existing task
export const editTask = async (taskId: string, assignTo: string, data: any) => {
    try {
        const taskRef = firestore().collection('tasks').doc(taskId);
        const taskSnapshot = await taskRef.get();

        if (!taskSnapshot.exists) {
            throw new Error('Task not found');
        }

        const updatedData = {
            ...taskSnapshot.data(),
            ...data,
            assignTo,
            updatedAt: firestore.FieldValue.serverTimestamp(),
        };

        await taskRef.update(updatedData);

        return { id: taskId, ...updatedData };
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};

// Delete a task
export const deleteTask = async (taskId: string) => {
    try {
        const taskRef = firestore().collection('tasks').doc(taskId);
        await taskRef.delete();
        
        return { message: 'Task deleted successfully' };
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};

// Get all invites
export const getAllInvites = async (inviteTo: string) => {
    try {
        const invitesSnapshot = await firestore()
            .collection('invites')
            .where('inviteTo', '==', inviteTo)
            .get();
        
        const invites = invitesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return invites;
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};

// Create a new invite
export const createInvite = async (invitedBy: string, inviteTo: string) => {
    try {
        // Check if the invited user exists
        const userSnapshot = await firestore()
            .collection('users')
            .doc(inviteTo)
            .get();

        if (!userSnapshot.exists) {
            showToast('User not found');
            return null; // Return null or handle as needed if user does not exist
        }

        // If the user exists, create a new invite
        const newInvite = {
            invitedBy,
            inviteTo,
            createdAt: firestore.FieldValue.serverTimestamp(),
        };

        const inviteRef = await firestore().collection('invites').add(newInvite);
        
        return { id: inviteRef.id, ...newInvite };
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};

// Accept an invite
export const acceptInvite = async (inviteId: string, invitedBy: string, inviteTo: string) => {
    try {
        const inviteRef = firestore().collection('invites').doc(inviteId);
        const inviteSnapshot = await inviteRef.get();

        if (!inviteSnapshot.exists) {
            throw new Error('Invite not found');
        }

        // Delete the invite
        await inviteRef.delete();

        // Add the invitee to the invitedBy user's members list (assuming members is a subcollection)
        const userRef = firestore().collection('users').doc(invitedBy).collection('members');
        await userRef.add({ memberId: inviteTo, addedAt: firestore.FieldValue.serverTimestamp() });

        return { message: 'Invite accepted and user added to members list' };
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};


export const deleteInvite = async (inviteId: string) => {
    try {
        const inviteRef = firestore().collection('invites').doc(inviteId);
        const inviteSnapshot = await inviteRef.get();

        if (!inviteSnapshot.exists) {
            throw new Error('Invite not found');
        }

        // Delete the invite
        await inviteRef.delete();

        return { message: 'Invite successfully deleted' };
    } catch (error: any) {
        throw new Error(`Firestore Error: ${error.message}`);
    }
};
export const getAllAdminTasks = async (createdBy: string) => {
    try {
        // get all takes where createdBy is equal to createdBy ...
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};
export const getAllMemberTasks = async (assignTo: string) => {
    try {
        // get all takes where assignTo is equal to assignTo ...
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};
export const createNewTask = async (createdBy: string, assignTo: string, data:any) => {
    try {
        // create new task and store the data in {...data,createdBy, assignTo}
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};
export const editTask = async (taskId: string, assignTo: string, data:any) => {
    try {
        // Edit the task where taskId is equal to taskId and store the data in {...oldData, ...data, assignTo}
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};
export const deleteTask = async (taskId: string) => {
    try {
        // delete the task where taskId = taskId
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};
export const getAllInvites = async (inviteTo: string) => {
    try {
        // get all invites where inviteTo = inviteTo
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};
export const createInvite = async (invitedBy: string, inviteTo: string) => {
    try {
        // create new invite and store the data in {...data,invitedBy, inviteTo}
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};
export const acceptInvite = async (inviteId:string, invitedBy: string, inviteTo: string) => {
    try {
        // delete the invite where invitedId = invitedId and store the inviteTo in the invitedBy user collection members
    } catch (error:any) {
        throw new Error(`FireStore Error: ${error}`)
    }
};


// there and 3 collection 
// 1) users 
// 2) tasks
// 3) invites
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyButton, MyText, PopupModal, SmallBtn } from '@components'
import { MY_COLORS } from '@constants'
import { adjust } from '@utils'
import { ConfirmationContent, Detail, FilterOptions, SelectUser, TaskCard, TaskManagement } from './components'
import { createNewTask, deleteTask, editTask, getAllMembers } from '@services'
import { useAuth } from '@context'
import firestore from '@react-native-firebase/firestore';


type TaskType = "title" | "description" | "dueDate" | "priority" | "selectedUser" | "status";
interface Task { id: string; title: string; description: string; dueDate: string; priority: string; selectedUser: { name: string; uid: string }; status: string; createdBy: string; assignTo: string; }

const DashboardScreen = () => {

  const { currentUser } = useAuth()
  const { isAdmin } = useAuth()

  const [loading, setLoading] = useState<boolean>(false);
  const initialTaskData: Task = { id: "", title: "", description: "", dueDate: "", priority: "High", selectedUser: { name: "", uid: "" }, status: "pending", createdBy: "", assignTo: "" }
  const [openedModal, setOpenedModal] = useState<false | 'confirmation' | 'detail' | 'filter' | 'task_management' | 'select_user'>(false);
  const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high' | ''>('');
  const [mode, setMode] = useState<'editing' | 'add_new' | ''>('');
  const [selectedDate, setSelectedDate] = useState<'overdue' | 'upcoming' | 'today' | ''>('');
  const [task, setTask] = useState<Task>(initialTaskData);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [openedTask, setOpenedTask] = useState<Task | null>(null);
  const [confirmationAction, setConfirmationAction] = useState<'delete' | 'complete' | ''>(''); // New state to track the action

  useEffect(() => {
    if (!currentUser?.uid) return;
    const queryField = isAdmin ? 'createdBy' : 'assignTo';
    const unsubscribe = firestore()
      .collection('tasks')
      .where(queryField, '==', currentUser.uid)
      .onSnapshot(
        (snapshot) => {
          console.log("Snapshot data id: ", snapshot.docs.map(doc => doc.id));
          const fetchedTasks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Task[];
          console.log("getting tasks: ", fetchedTasks);
          setAllTasks(fetchedTasks);
        },
        (error) => {
          console.error(`Firestore Error: ${error.message}`);
        }
      );
    return () => unsubscribe();
  }, [currentUser, isAdmin]);

  const handleTask = (key: keyof Task, value: string | { name: string; uid: string }) => {
    setTask(prevTask => ({
      ...prevTask,
      [key]: value
    }));
  };

  const handleEdit = () => {
    if (openedTask) {
      setTask(openedTask);
      setMode("editing");
      setOpenedModal("task_management");
    }
  };

  const handleDelete = async () => {
    if (openedTask) {
      try {
        await deleteTask(openedTask.id);
        setTask(initialTaskData)
        setMode('')
        setOpenedModal(false);
      } catch (error) {
        console.error('Failed to delete the task:', error);
      }
    }
  };

  const handleComplete = async () => {
    if (openedTask) {
      try {
        await editTask(openedTask.id, openedTask.assignTo, { ...openedTask, status: 'complete' });
        setTask(initialTaskData)
        setMode('')
        setOpenedModal(false);
      } catch (error) {
        console.error('Failed to complete the task:', error);
      }
    }
  };

  const handleConfirm = async () => {
    setLoading(true)
    if (confirmationAction === 'delete') {
      handleDelete();
    } else if (confirmationAction === 'complete') {
      await handleComplete();
    }
    setConfirmationAction('');
    setLoading(false)
  };

  const handleOpenTask = (taskData: any) => {
    setOpenedTask(taskData);
    setOpenedModal("detail")
  };

  const handleSave = () => {
    if (mode == "add_new") createNewTask(currentUser!.uid, task.selectedUser.uid, task)
    if (mode == "editing") editTask(task.id, task.selectedUser.uid, task)
    setTask(initialTaskData)
    setMode('')
    setOpenedModal(false);
  };
  const handleCancel = () => {
    setTask(initialTaskData)
    setMode('')
    setOpenedModal(false);
  };

  const handleUserSelect = (user: { name: string; uid: string }) => {

    console.log("user")
    console.log(user)
    handleTask("selectedUser", { name: user.name, uid: user.uid });
    setOpenedModal('task_management');
  };

  // Function to check if the task is overdue
  const isOverdue = (dueDate: string): boolean => {
    const today = new Date().setHours(0, 0, 0, 0);
    const taskDate = new Date(dueDate).setHours(0, 0, 0, 0);
    return taskDate < today;
  };

  const isUpcoming = (dueDate: string): boolean => {
    const today = new Date().setHours(0, 0, 0, 0);
    const taskDate = new Date(dueDate).setHours(0, 0, 0, 0);
    return taskDate >= today;
  };

  const isToday = (dueDate: string): boolean => {
    const today = new Date().setHours(0, 0, 0, 0);
    const taskDate = new Date(dueDate).setHours(0, 0, 0, 0);
    return taskDate === today;
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 20, backgroundColor: "black", paddingHorizontal: 12, paddingVertical: 20 }}>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <SmallBtn onPress={() => { setOpenedModal("filter") }} title='Filter' />
        <MyText h4 color='white'>TODO LIST</MyText>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: adjust(42), height: adjust(42), borderRadius: 50, backgroundColor: MY_COLORS.PRIMARY }}>
            <Image resizeMode="cover" style={{width:"100%",height:"100%",borderRadius:50}} source={{ uri: currentUser?.photoURL! }} />
          </View>
          <MyText color='white' bold fp>{isAdmin?"Admin":"Member"}</MyText>
        </View>
      </View>

      {isAdmin && <MyButton onPress={() => { setMode('add_new'); setOpenedModal('task_management') }} title='New Task' style={{ width: "auto", alignSelf: 'flex-end', paddingHorizontal: 12 }} />}


      {allTasks.length > 0 && allTasks.map((task: any, index: number): any => (
        ((selectedDate === '') ||
          (selectedDate === 'overdue' && isOverdue(task.dueDate)) ||
          (selectedDate === 'upcoming' && isUpcoming(task.dueDate)) ||
          (selectedDate === 'today' && isToday(task.dueDate))) &&
        (selectedPriority == task.priority.toLowerCase() || !selectedPriority) &&
        <TaskCard key={index} onPress={() => { handleOpenTask(task) }} title={task.title} subtitle={task.dueDate} priority={task.priority.toLowerCase()} isComplete={task.status === 'complete'} />
      ))}


      <PopupModal isVisible={!!openedModal} onClose={() => { setOpenedModal(false) }}>
        {openedModal == "confirmation" && confirmationAction && <ConfirmationContent loading={loading} message={`Are you sure to ${confirmationAction} this task?`} onCancel={() => { setOpenedModal(false); setConfirmationAction(''); }} onConfirm={handleConfirm} />}
        {openedModal === 'detail' && openedTask && (<Detail isComplete={openedTask?.status == "complete"} description={openedTask.description} onComplete={() => { setOpenedModal('confirmation'); setConfirmationAction('complete'); }} onDelete={() => { setOpenedModal('confirmation'); setConfirmationAction('delete'); }} onEdit={handleEdit} status={openedTask.status} timestamp={openedTask.dueDate} title={openedTask.title} />)}
        {openedModal === "filter" && (<FilterOptions selectedPriority={selectedPriority} selectedDate={selectedDate} onPrioritySelect={setSelectedPriority} onDateSelect={setSelectedDate} />)}
        {openedModal == "select_user" && <SelectUser onUserSelect={(user) => { handleUserSelect(user) }} />}
        {openedModal == "task_management" &&
          <TaskManagement
            onTitleChange={(val: string) => handleTask('title', val)}
            onDescriptionChange={(val: string) => handleTask("description", val)}
            onDueDateChange={(val: string) => handleTask("dueDate", val)}
            onPrioritySelect={(priority: string) => handleTask("priority", priority)}
            onUserSelect={() => { setOpenedModal("select_user") }}
            onSave={handleSave}
            onCancel={handleCancel}
            titleValue={task.title}
            descriptionValue={task.description}
            dueDateValue={task.dueDate}
            selectedPriority={task.priority}
            selectedUser={task.selectedUser}
          />}
      </PopupModal>
    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})


{/* <View style={{}}></View>
<MyText>TODO LIST</MyText> */}



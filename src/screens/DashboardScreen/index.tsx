import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyButton, MyText, PopupModal, SmallBtn } from '@components'
import { MY_COLORS } from '@constants'
import { adjust } from '@utils'
import { ConfirmationContent, Detail, FilterOptions, SelectUser, TaskCard, TaskManagement } from './components'
import { createNewTask, deleteTask } from '@services'
import { useAuth } from '@context'
import firestore from '@react-native-firebase/firestore';


type TaskType = "title" | "description" | "dueDate" | "priority" | "selectedUser" | "status";
const DashboardScreen = () => {

  const { currentUser } = useAuth()
  const initialTaskData = { id: "", title: "", description: "", dueDate: "", priority: "High", selectedUser: { name: "", uid: "" }, status: "pending" }

  const [openedModal, setOpenedModal] = useState<false | 'confirmation' | 'detail' | 'filter' | 'task_management' | 'select_user'>(false);
  const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high'>('high');
  const [mode, setMode] = useState<'editing' | 'add_new' | ''>('');
  const [selectedDate, setSelectedDate] = useState<'overdue' | 'upcoming'>('upcoming');
  const [task, setTask] = useState<any>(initialTaskData);
  const [allTasks, setAllTasks] = useState<any>([]);
  const [openedTask, setOpenedTask] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('tasks')
      .where('createdBy', '==', currentUser?.uid)
      .onSnapshot(
        (snapshot) => {
          const fetchedTasks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setAllTasks(fetchedTasks);
        },
        (error) => {
          console.error(`Firestore Error: ${error.message}`);
        }
      );

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [currentUser]);

  // console.log("&&&&&&&&&&&&&&")
  // console.log(allTasks)

  const handleTask = (key: TaskType, value: string) => {
    const current_task = { ...task };
    const new_task = { ...current_task, [key]: value };
    setTask(new_task);
  };

  const handleEdit = () => {
    setMode("editing")
  };
  
  const handleDelete = async () => {
    if (openedTask) {
      try {
        await deleteTask(openedTask.id); // Call deleteTask with the ID of the task to delete
        setAllTasks((prevTasks: any) => prevTasks.filter((task : any) => task.id !== openedTask.id)); // Update the state
        setOpenedModal(false); // Close the modal
      } catch (error) {
        console.error('Failed to delete the task:', error);
        // Optionally, show an error message to the user
      }
    }
  };
   

  const handleComplete = () => { };
  
  const handleOpenTask = (taskData: any) => {
    setOpenedTask(taskData);
    console.log("taskData: ", taskData)
    setOpenedModal("detail")
  };

  const handleSave = () => {
    // Save logic
    console.log('Task saved:', task);
    if (mode == "add_new") createNewTask(currentUser!.uid, task.selectedUser.uid, task)
    if (mode == "editing") createNewTask(task.id, task.selectedUser.uid, task)
    setOpenedModal(false);
  };
  const handleCancel = () => {
    // Cancel logic
    setTask(initialTaskData)
    setMode('')
    setOpenedModal(false);
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 20, backgroundColor: "black", paddingHorizontal: 12, paddingVertical: 20 }}>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <SmallBtn onPress={() => { setOpenedModal("filter") }} title='Filter' />
        <MyText h4 color='white'>TODO LIST</MyText>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: adjust(42), height: adjust(42), borderRadius: 50, backgroundColor: MY_COLORS.PRIMARY }} />
          <MyText color='white' bold fp>Naeem</MyText>
        </View>
      </View>

      <MyButton onPress={() => { setMode('add_new'); setOpenedModal('task_management') }} title='New Task' style={{ width: "auto", alignSelf: 'flex-end', paddingHorizontal: 12 }} />

      {allTasks.length > 0 && allTasks.map((task: any,index:number): any => (
        <TaskCard key={task.id} onPress={() => { handleOpenTask(task) }} title={task.title} subtitle={task.dueDate} priority={task.priority.toLowerCase()} isComplete={task.status === 'complete'} />
      ))}

      <PopupModal isVisible={!!openedModal} onClose={() => { setOpenedModal(false) }}>
        {openedModal == "confirmation" && <ConfirmationContent message='Are you sure to delete this task' onCancel={() => { setOpenedModal(false) }} onConfirm={() => { }} />}
        {openedModal === 'detail' && openedTask && (<Detail description={openedTask.description} onComplete={handleComplete} onDelete={handleDelete} onEdit={handleEdit} status={openedTask.status} timestamp={openedTask.dueDate} title={openedTask.title}/>)}
        {openedModal == "filter" && <FilterOptions onPrioritySelect={(val) => { setSelectedPriority(val) }} onDateSelect={(val) => { setSelectedDate(val) }} />}
        {openedModal == "select_user" && <SelectUser onUserSelect={(val) => { handleTask("selectedUser", val); setOpenedModal('task_management') }} />}
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
            selectedUser={task.selectedUser.name}
          />}
      </PopupModal>
    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})


{/* <View style={{}}></View>
<MyText>TODO LIST</MyText> */}



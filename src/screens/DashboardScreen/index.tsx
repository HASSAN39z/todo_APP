import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MyButton, MyText, PopupModal, SmallBtn } from '@components'
import { MY_COLORS } from '@constants'
import { adjust } from '@utils'
import { ConfirmationContent, Detail, FilterOptions, TaskCard, TaskManagement } from './components'

const DashboardScreen = () => {
  const [openedModal, setOpenedModal] = useState<false | 'confirmation' | 'detail' | 'filter' | 'task_management'>(false);
  const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high'>('high');
  const [selectedDate, setSelectedDate] = useState<'overdue' | 'upcoming'>('upcoming');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('High');
  const [selectedUser, setSelectedUser] = useState('');

  const handleSave = () => {
    // Save logic
    console.log('Task saved:', { title, description, dueDate, priority, selectedUser });
    setOpenedModal(false);
  };
  const handleCancel = () => {
    // Cancel logic
    setOpenedModal(false);
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 20, backgroundColor: "black", paddingHorizontal: 12, paddingVertical: 20 }}>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <SmallBtn onPress={() => {setOpenedModal("filter") }} title='Filter' />
        <MyText h4 color='white'>TODO LIST</MyText>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: adjust(42), height: adjust(42), borderRadius: 50, backgroundColor: MY_COLORS.PRIMARY }} />
          <MyText color='white' bold fp>Naeem</MyText>
        </View>
      </View>

      <MyButton onPress={() => {setOpenedModal('task_management') }} title='New Task' style={{ width: "auto", alignSelf: 'flex-end', paddingHorizontal: 12 }} />


      <TaskCard onPress={() => {setOpenedModal("detail")}} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />

      <PopupModal isVisible={!!openedModal} onClose={() => {setOpenedModal(false) }}>
        {openedModal == "confirmation" && <ConfirmationContent message='Are you sure to delete this task' onCancel={() => {setOpenedModal(false)}} onConfirm={() => { }} />}
        {openedModal == "detail" && <Detail description={"description"} onComplete={() => {setOpenedModal(false) }} onDelete={() => { }} onEdit={() => { }} status='Pending' timestamp='Today At 16:45' title='Do Math Homework' />}
        {openedModal == "filter" && <FilterOptions onPrioritySelect={(val) => { setSelectedPriority(val) }} onDateSelect={(val) => { setSelectedDate(val) }} />}
        {openedModal == "task_management" &&
          <TaskManagement
            onTitleChange={(val: string) => setTitle(val)}
            onDescriptionChange={(val: string) => setDescription(val)}
            onDueDateChange={(val: string) => setDueDate(val)}
            onPrioritySelect={(priority: string) => setPriority(priority)}
            onUserSelect={() => { }}
            onSave={handleSave}
            onCancel={handleCancel}
            titleValue={title}
            descriptionValue={description}
            dueDateValue={dueDate}
            selectedPriority={priority}
          />}
      </PopupModal>
    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})


{/* <View style={{}}></View>
<MyText>TODO LIST</MyText> */}



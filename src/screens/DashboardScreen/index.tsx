import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MyButton, MyText, SmallBtn } from '@components'
import { MY_COLORS } from '@constants'
import { adjust } from '@utils'
import TaskCard from './components/TaskCard'
import DetailPopUp from './components/DetailPopUp'

const DashboardScreen = () => {

  const [selectedTask, setSelectedTask] = useState(null); // State to track selected task
  const [isPopUpVisible, setIsPopUpVisible] = useState(false); // State to control pop-up visibility

  const handleTaskPress = (task: any) => {
    setSelectedTask(task); // Set the selected task
    setIsPopUpVisible(true); // Show the pop-up
  };

  const closePopUp = () => {
    setIsPopUpVisible(false); // Hide the pop-up
    setSelectedTask(null); // Reset the selected task
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 20, backgroundColor: "black", paddingHorizontal: 12, paddingVertical: 20 }}>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <SmallBtn onPress={() => { }} title='Filter' />
        <MyText h4 color='white'>TODO LIST</MyText>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: adjust(42), height: adjust(42), borderRadius: 50, backgroundColor: MY_COLORS.PRIMARY }} />
          <MyText color='white' bold fp>Naeem</MyText>
        </View>
      </View>

      <MyButton onPress={() => { }} title='New Task' style={{ width: "auto", alignSelf: 'flex-end', paddingHorizontal: 12 }} />


      <TaskCard onPress={() => handleTaskPress({ title: 'Do Math Homework', subtitle: 'Today At 16:45', priority: 'low', isComplete: true })} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />
      <TaskCard onPress={() => handleTaskPress({ title: 'Do English Homework', subtitle: 'Tomorrow At 09:00', priority: 'medium', isComplete: false })} title='Do English Homework' subtitle='Tomorrow At 09:00' priority='medium' isComplete={false} />
      <TaskCard onPress={() => { }} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />
      <TaskCard onPress={() => { }} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />

      {/* DetailPopUp */}
      {isPopUpVisible && selectedTask && (
        <DetailPopUp
          task={selectedTask} // Pass the selected task data to DetailPopUp
          onClose={closePopUp} // Handle pop-up close
        />
      )}
    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})


{/* <View style={{}}></View>
<MyText>TODO LIST</MyText> */}
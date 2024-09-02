import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MyButton, MyText, SmallBtn } from '@components'
import { MY_COLORS } from '@constants'
import { adjust } from '@utils'
import TaskCard from './components/TaskCard'

const DashboardScreen = () => {
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


      <TaskCard onPress={()=>{}} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />
      <TaskCard onPress={()=>{}} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />
      <TaskCard onPress={()=>{}} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />
      <TaskCard onPress={()=>{}} title='Do Math Homework' subtitle='Today At 16:45' priority='low' isComplete={true} />

    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})


{/* <View style={{}}></View>
<MyText>TODO LIST</MyText> */}
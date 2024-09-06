import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from '@context'
import { AuthNav } from '@navigation'
import { MyText } from '@components'
import { DashboardScreen } from '@screens'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <AuthProvider>
      {/* <DashboardScreen /> */}
      <AuthNav />
    </AuthProvider>
  )
}
export default App
const styles = StyleSheet.create({})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MyButton } from '@components'
import { useAuth } from '@context';

const LoginScreen = () => {
  const { handleGoogleSignIn } = useAuth();
  return (
    <View style={{flex:1, backgroundColor:"black", justifyContent:"center",paddingHorizontal:20}}>
      <MyButton onPress={()=>{handleGoogleSignIn()}} title='Continue with Google'/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
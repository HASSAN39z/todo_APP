import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MyButton } from '@components'
import { useAuth } from '@context';

const LoginScreen = () => {
  const { handleGoogleSignIn } = useAuth();
  return (
    <TouchableOpacity onPress={handleGoogleSignIn} style={{flex:1, backgroundColor:"black", justifyContent:"center",paddingHorizontal:20}}>
      <MyButton onPress={()=>{}} title='Continue with Google'/>
    </TouchableOpacity>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})


import { ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyButton, MyText, MyTextInput } from '@components'
import { MY_COLORS } from '@constants'

const index = () => {
  return (
    <View style={{ backgroundColor: 'black', height: '100%', paddingVertical: 20, paddingHorizontal: 12 }}>
      <ScrollView>
        <View>
          <MyText color='white'>Select Role</MyText>
          <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <MyButton title='Select Role' onPress={() => { }} style={{ flex: 1 }} />
            <MyButton title='Select Role' onPress={() => { }} style={{ flex: 1 }} />
          </View>
        </View>
        <View>
          <MyText color='white'>My Member ID</MyText>
          <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
            <MyText color='white'>12132123453453</MyText>
            <MyButton title='Copy' onPress={() => { }} style={{ height: 25, width: 50 }} />
          </View>
        </View>
        <View style={{ gap: 10 }}>
          <MyText color='white'>Invalid User</MyText>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white'>Member ID</MyText>
            <MyTextInput placeholder='21334343253426' onChangeText={() => { }} />
            <MyButton title='Submit' onPress={() => { }} />
            <MyText fp color='red' style={{ textAlign: 'center' }}> User not found</MyText>
          </View>
        </View>
        <View style={{ gap: 10 }}>
          <MyText style={{ marginTop: 10 }} color='white'>Invitation</MyText>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white' style={{ textAlign: 'center' }}>Ahmad Invite you</MyText>
            <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <MyButton title='Accept' onPress={() => { }} style={{ flex: 1 }} />
              <MyButton title='Reject' onPress={() => { }} style={{ flex: 1 }} />
            </View>
          </View>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white' style={{ textAlign: 'center' }}>Ahmad Invite you</MyText>
            <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <MyButton title='Accept' onPress={() => { }} style={{ flex: 1 }} />
              <MyButton title='Reject' onPress={() => { }} style={{ flex: 1 }} />
            </View>
          </View>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white' style={{ textAlign: 'center' }}>Ahmad Invite you</MyText>
            <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <MyButton title='Accept' onPress={() => { }} style={{ flex: 1 }} />
              <MyButton title='Reject' onPress={() => { }} style={{ flex: 1 }} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
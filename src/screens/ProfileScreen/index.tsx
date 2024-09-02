

import { ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useId, useState } from 'react'
import { MyButton, MyText, MyTextInput } from '@components'
import { MY_COLORS } from '@constants'
import { useAuth } from '@context'
import Clipboard from '@react-native-clipboard/clipboard';
import { showToast } from '@utils'
import { createInvite, getAllInvites } from '@services'


type Invite = {
  id: string;
  invitedBy: string;
  inviteTo: string;
  createdAt: any; // Adjust the type if you use a specific type for timestamps
};

const ProfileScreen = () => {
const {currentUser} = useAuth()

const [userId, setUserId] = useState("")
const [invites, setInvites] = useState<Invite[]>([]); // Explicitly type the state


useEffect(() => {
  const fetchInvites = async () => {
    try {
      const invitesList = await getAllInvites(currentUser!.uid);
      if (invitesList.length > 0) setInvites(invitesList as Invite[]); // Type assertion if needed
    } catch (error) {
      console.error('Error fetching invites:', error);
    }
  };

  fetchInvites();
}, [currentUser]);

console.log(invites);


const handleCopyPress = () => {
  Clipboard.setString(currentUser!.uid); // Use Clipboard to copy text
  showToast('Success', 'Text copied to clipboard!'); // Custom function to show a toast message
};


const handleSubmit = () => {
  if(!userId || userId.length < 5) return showToast("Invalid user id");
  createInvite(currentUser!.uid, userId)
}

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
            <MyText color='white'>{currentUser?.uid}</MyText>
            <MyButton title='Copy' onPress={handleCopyPress} style={{ height: 25, width: 50 }} />
          </View>
        </View>
        <View style={{ gap: 10 }}>
          <MyText color='white'>Invalid User</MyText>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white'>Member ID</MyText>
            <MyTextInput placeholder='21334343253426' value={userId} onChangeText={(val) => {setUserId(val) }} />
            <MyButton title='Submit' onPress={handleSubmit} />
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
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
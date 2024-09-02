import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyButton, MyText, MyTextInput } from '@components'
import { MY_COLORS } from '@constants'
import { useAuth } from '@context'
import Clipboard from '@react-native-clipboard/clipboard';
import { showToast } from '@utils'
import { acceptInvite, createInvite, deleteInvite, getAllInvites } from '@services'


type Invite = {
  id: string;
  invitedBy: string;
  inviteTo: string;
  createdAt: any; // Adjust the type if you use a specific type for timestamps
};

const ProfileScreen = () => {
const {currentUser, isAdmin, setIsAdmin} = useAuth()

const [userId, setUserId] = useState("")
const [invites, setInvites] = useState<Invite[]>([]); // Explicitly type the state


useEffect(() => {
  fetchInvites();
}, [currentUser]);



const fetchInvites = async () => {
  try {
    const invitesList = await getAllInvites(currentUser!.uid);
    if (invitesList.length > 0) setInvites(invitesList as Invite[]);
  } catch (error) {
    console.error('Error fetching invites:', error);
  }
};

const handleCopyPress = () => {
  Clipboard.setString(currentUser!.uid); // Use Clipboard to copy text
  showToast('Success', 'Text copied to clipboard!'); // Custom function to show a toast message
};


const handleSubmit = async () => {
  if(!userId || userId.length < 5) return showToast("Invalid user id");
  await createInvite(currentUser!.uid, userId)
  showToast("Invite created successfully");

}

const handleAcceptInvite = async (inviteId:string, invitedBy:string, inviteTo:string) => {
  try {
    await acceptInvite(inviteId, invitedBy, inviteTo);
    showToast(`Accepted invite with ID: ${inviteId}`);
  } catch (error) {
    console.error('Error accepting invite:', error);
  }
};

const handleRejectInvite = async (inviteId:string) => {
  try {
    await deleteInvite(inviteId);
    showToast(`Deleted invite with ID: ${inviteId}`);
  } catch (error) {
    console.error('Error deleting invite:', error);
  }
};



  return (
    <View style={{ backgroundColor: 'black', height: '100%', paddingVertical: 20, paddingHorizontal: 12 }}>
      <ScrollView>

        <View>
          <MyText color='white' h4>Select Role</MyText>
          <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <MyButton title='Admin' onPress={() => {!isAdmin && setIsAdmin(true) }} btnWidth="48%" btnType={isAdmin?'primary':"secondary"}/>
            <MyButton title='Member' onPress={() => { isAdmin && setIsAdmin(false)}} btnWidth="48%" btnType={!isAdmin?'primary':"secondary"} />
          </View>
        </View>

        <View>
          <MyText color='white' h4>My Member ID</MyText>
          <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
            <MyText color='white'>{currentUser?.uid}</MyText>
            <MyButton title='Copy' onPress={handleCopyPress} style={{ height: 25, width: 50 }} />
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <MyText color='white' h4>Invalid User</MyText>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white'>Member ID</MyText>
            <MyTextInput placeholder='21334343253426' value={userId} onChangeText={(val) => {setUserId(val) }} />
            <MyButton title='Submit' onPress={handleSubmit} />
          </View>
        </View>

        {invites.map((invite) => (
        <View key={invite.id} style={{ gap: 10, marginBottom: 10 }}>
          <MyText style={{ marginTop: 10 }} color='white'>Invitation</MyText>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white' style={{ textAlign: 'center' }}>
              {invite.invitedBy} invited you
            </MyText>
            <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <MyButton title='Accept' onPress={() => handleAcceptInvite(invite.id, invite.invitedBy, invite.inviteTo)} style={{ flex: 1 }} />
              <MyButton title='Reject' onPress={() => handleRejectInvite(invite.id)} style={{ flex: 1 }} />
            </View>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
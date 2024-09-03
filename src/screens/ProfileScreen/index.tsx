import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoadingScreen, MyButton, MyText, MyTextInput, SmallBtn } from '@components'
import { MY_COLORS } from '@constants'
import { useAuth } from '@context'
import Clipboard from '@react-native-clipboard/clipboard';
import { showToast } from '@utils'
import { acceptInvite, createInvite, deleteInvite } from '@services'
import firestore  from '@react-native-firebase/firestore';



type Invite = {
  id: string;
  invitedBy: string;
  inviteTo: string;
  createdBy: string;
  createdAt: any; // Adjust the type if you use a specific type for timestamps
};

const ProfileScreen = () => {
  const { currentUser, isAdmin, setIsAdmin } = useAuth()

  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState("")
  const [invites, setInvites] = useState<Invite[]>([]); // Explicitly type the state


  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = firestore()
      .collection('invites')
      .where('inviteTo', '==', currentUser.uid)
      .onSnapshot(
        (snapshot) => {
          const invitesList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setInvites(invitesList as Invite[]);
        },
        (error) => {
          console.error('Error fetching invites:', error);
        }
      );

    // Cleanup the listener when the component unmounts or currentUser changes
    return () => unsubscribe();

  }, [currentUser]);


  

  const handleCopyPress = () => {
    Clipboard.setString(currentUser!.uid); // Use Clipboard to copy text
    showToast('Text copied to clipboard!'); // Custom function to show a toast message
  };

  const handleSubmit = async () => {
    if (!userId || userId.length < 5) {
      showToast("Invalid user id");
      return;
    }

    setLoading(true);
    try {
      await createInvite(currentUser!.uid, userId, currentUser?.displayName!);
      showToast("Invite created successfully");
    } catch (error) {
      console.error('Error creating invite:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptInvite = async (invite:any) => {
    const {inviteToUserName, id, invitedBy, inviteTo} = invite
    setLoading(true);
    try {
      await acceptInvite(id, invitedBy, inviteTo, inviteToUserName);
      showToast(`Accepted invite with ID: ${id}`);
    } catch (error) {
      console.error('Error accepting invite:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRejectInvite = async (inviteId: string) => {
    setLoading(true);
    try {
      await deleteInvite(inviteId);
      showToast(`Deleted invite with ID: ${inviteId}`);
    } catch (error) {
      console.error('Error deleting invite:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <View style={{ flexGrow: 1, backgroundColor: 'black', paddingVertical: 20, paddingHorizontal: 12 }}>
      <ScrollView contentContainerStyle={{ gap: 20 }}>

        <View style={{ gap: 6 }}>
          <MyText color='white' h4>Select Role</MyText>
          <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <MyButton title='Admin' onPress={() => { !isAdmin && setIsAdmin(true) }} btnWidth="48%" btnType={isAdmin ? 'primary' : "secondary"} />
            <MyButton title='Member' onPress={() => { isAdmin && setIsAdmin(false) }} btnWidth="48%" btnType={!isAdmin ? 'primary' : "secondary"} />
          </View>
        </View>

        <View style={{ gap: 6 }}>
          <MyText color='white' h4>My Member ID</MyText>
          <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
            <MyText color='white' cp style={{ textDecorationLine: "underline" }}>{currentUser?.uid}</MyText>
            <SmallBtn title='Copy' onPress={handleCopyPress} style={{ paddingVertical: 4, paddingHorizontal: 8, }} />
          </View>
        </View>

        {isAdmin && <View style={{ gap: 6 }}>
          <MyText color='white' h4>Invalid User</MyText>
          <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
            <MyText color='white' >Member ID</MyText>
            <MyTextInput placeholder='21334343253426' value={userId} onChangeText={(val) => { setUserId(val) }} />
            <MyButton title='Submit' onPress={handleSubmit} />
          </View>
        </View>}

        {!isAdmin && invites.map((invite) => (
          <View key={invite.id} style={{ gap: 10, marginBottom: 10 }}>
            <MyText color='white' h4>Invitation</MyText>
            <View style={{ gap: 10, backgroundColor: MY_COLORS.PRIMARY, justifyContent: 'center', padding: 10, borderRadius: 10 }}>
              <MyText color='white' style={{ textAlign: 'center' }}>
                {invite.createdBy} invited you
              </MyText>
              <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <MyButton title='Accept' onPress={() => handleAcceptInvite(invite)} style={{ flex: 1 }} />
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
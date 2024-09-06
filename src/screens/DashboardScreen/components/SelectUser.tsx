import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MyButton, MyText } from '@components';
import { getAllMembers } from '@services';
import { useAuth } from '@context';
import { wp } from '@utils';
import { MY_COLORS } from '@constants';

interface UserSelectorProps {
    onUserSelect: (user: any) => void;
}

const UserSelector: React.FC<UserSelectorProps> = ({ onUserSelect }) => {
    const [members, setMembers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchMembers = async () => {
            setLoading(true)
            if (currentUser) {
                const fetchedMembers = await getAllMembers(currentUser.uid);
                console.log("Fetched members:", fetchedMembers);
                setMembers(fetchedMembers);
            }
            setLoading(false)
        };

        fetchMembers();
    }, [currentUser]);

    console.log("Members in state:", members);

    if (loading) return <ActivityIndicator size={32} color="white" />

    return (
        <View style={{ width: "100%", maxHeight: wp(100) }}>
            <ScrollView contentContainerStyle={{ gap: 20 }} showsVerticalScrollIndicator={false}>
                {members.map((member) => (
                    <TouchableOpacity key={member.uid} onPress={() => onUserSelect({ name: member.memberName, uid: member.memberId })} style={{ backgroundColor: "white", paddingVertical: 8, paddingHorizontal: 8, borderRadius: 8 }}>
                        <MyText color='black'>Name: {member.memberName}</MyText>
                        <MyText color='black'>Uid: {member.memberId}</MyText>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default UserSelector;
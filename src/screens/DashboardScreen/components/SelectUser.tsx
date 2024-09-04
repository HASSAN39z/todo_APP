import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { MyButton, MyText } from '@components';
import { getAllMembers } from '@services';
import { useAuth } from '@context';

interface UserSelectorProps {
    onUserSelect: (user: any) => void;
}

const UserSelector: React.FC<UserSelectorProps> = ({ onUserSelect }) => {
    const [members, setMembers] = useState<any[]>([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchMembers = async () => {
            if (currentUser) {
                const fetchedMembers = await getAllMembers(currentUser.uid);
                console.log("Fetched members:", fetchedMembers);
                setMembers(fetchedMembers);
            }
        };

        fetchMembers();
    }, [currentUser]);

    console.log("Members in state:", members);

    return (
        <ScrollView style={{ maxHeight: 200 }}>
            {members.map((member) => (
                <MyButton
                    key={member.id}
                    title={member.memberName}
                    onPress={() => onUserSelect({ name: member.memberName, uid: member.memberId })}
                    btnType='primary'
                    style={{ marginBottom: 10 }}
                />
            ))}
        </ScrollView>
    );
};

export default UserSelector;
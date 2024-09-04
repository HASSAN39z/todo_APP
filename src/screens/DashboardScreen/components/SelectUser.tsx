import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MyText } from '@components';
import { MY_COLORS } from '@constants';
import { wp } from '@utils';



interface SelectUserProps {
    onUserSelect: (val: any) => void;
}

const SelectUser: React.FC<SelectUserProps> = ({ onUserSelect }) => {
    return (
        <View style={{width:"100%",maxHeight:wp(100)}}>
        <ScrollView contentContainerStyle={{gap:20}} showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>onUserSelect({name:"naeem",uid:"23235435342"})} style={{backgroundColor:"white", paddingVertical:8,paddingHorizontal:8,borderRadius:8}}>
                <MyText color='black'>Name: Naeem</MyText>
                <MyText color='black'>Uid: 243432432432233</MyText>
            </TouchableOpacity>

        </ScrollView>
        </View>
    )
}

export default SelectUser

const styles = StyleSheet.create({})
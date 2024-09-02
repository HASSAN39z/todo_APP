
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MyButton, MyText, PopupModal } from '@components'
import { MY_COLORS } from '@constants';

interface ConfirmationPopUpProps {
    isVisible: boolean,
    onClose: () => void

}
const ConfirmationPopUp = () => {
    const [isSelected, setIsSelected] = useState('yes');
    return (
        <View>
            <PopupModal isVisible={true} onClose={() => { }}>
                <MyText color='white'>Are you sura to complete this task</MyText>
                <View style={{ flexDirection: 'row', gap: 10, }}>
                    <MyButton
                        onPress={() => { setIsSelected('yes') }}
                        title='Yes'
                        style={{
                            flex: 1,
                            backgroundColor: isSelected === 'yes' ? 'white' : MY_COLORS.PRIMARY,
                            borderColor: isSelected === 'yes' ? 'transparent' : 'white',
                            borderWidth: 1
                        }}
                        btnType={isSelected === 'yes' ? 'white' : 'secondary'}
                    />
                    <MyButton
                        onPress={() => { setIsSelected('cancel') }}
                        title='Cancel'
                        style={{
                            flex: 1,
                            backgroundColor: isSelected === 'cancel' ? 'white' : MY_COLORS.PRIMARY,
                            borderColor: isSelected === 'cancel' ? 'transparent' : 'white',
                            borderWidth: 1
                        }}
                        btnType={isSelected === 'cancel' ? 'white' : 'secondary'}
                    />

                </View>
            </PopupModal>
        </View>
    )
}

export default ConfirmationPopUp

const styles = StyleSheet.create({})
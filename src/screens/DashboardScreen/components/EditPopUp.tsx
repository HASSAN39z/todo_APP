import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { MyButton, MyText, MyTextInput, PopupModal } from '@components';
import { MY_COLORS } from '@constants';

interface EditPopUpProps {
    isVisible: boolean;
    onClose: () => void;
}

const EditPopUp = ({ isVisible, onClose }: EditPopUpProps) => {
    const [isPrioritySelected, setIsPrioritySelected] = useState('Low');

    return (
        <PopupModal isVisible={isVisible} onClose={onClose}>
            <View style={styles.popupContainer}>
                <View>
                    <MyText color='white'>Title</MyText>
                    <MyTextInput placeholder='Complete' onChangeText={() => { }} />
                </View>
                <View>
                    <MyText color='white'>Description</MyText>
                    <MyTextInput placeholder='Complete' onChangeText={() => { }} />
                </View>
                <View>
                    <MyText color='white'>Due Date</MyText>
                    <MyTextInput placeholder='Complete' onChangeText={() => { }} />
                </View>
                <View>
                    <MyText p color='white'>Priority</MyText>
                    <View style={styles.priorityContainer}>
                        {['Low', 'Medium', 'High'].map((priority) => (
                            <MyButton
                                key={priority}
                                onPress={() => { setIsPrioritySelected(priority) }}
                                title={priority}
                                style={{
                                    flex: 1,
                                    backgroundColor: isPrioritySelected === priority ? 'white' : 'transparent',
                                    borderColor: isPrioritySelected === priority ? 'transparent' : 'white',
                                    borderWidth: 1
                                }}
                                btnType={isPrioritySelected === priority ? 'primary' : 'secondary'}
                            />
                        ))}
                    </View>
                </View>
                <View>
                    <MyText color='white'>Assign to user</MyText>
                    <MyButton title='Select User' onPress={() => { }} />
                </View>
                <View style={styles.actionButtons}>
                    <MyButton title='Save' onPress={onClose} style={{ flex: 1 }} />
                    <MyButton
                        title='Cancel'
                        onPress={onClose}
                        style={{
                            flex: 1,
                            backgroundColor: MY_COLORS.PRIMARY,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'white'
                        }}
                        btnType='secondary'
                    />
                </View>
            </View>
        </PopupModal>
    );
};

const styles = StyleSheet.create({
    popupContainer: {
        gap: 20,
        padding: 12,
        backgroundColor: MY_COLORS.PRIMARY,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 12,
    },
    priorityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10,
    },
    actionButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 40,
        width: '50%',
        gap: 10,
    },
});

export default EditPopUp;

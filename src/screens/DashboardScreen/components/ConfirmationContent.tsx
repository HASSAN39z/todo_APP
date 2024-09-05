import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { MyText, MyButton } from '@components'; // Adjust the import path based on your file structure
import { hp } from '@utils'; // Adjust the import path based on your utility file

interface ConfirmationContentProps {
    loading: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationContent: React.FC<ConfirmationContentProps> = ({ loading, message, onConfirm, onCancel }) => {

    if (loading) return <ActivityIndicator size={32} color="white" />
    return (
        <View style={styles.container}>
            <MyText color='white' p>{message}</MyText>
            <View style={styles.buttonContainer}>
                <MyButton
                    title='Yes'
                    onPress={onConfirm}
                    btnWidth="48%"
                    btnType='primary'
                    style={styles.button}
                />
                <MyButton
                    title='Cancel'
                    onPress={onCancel}
                    btnWidth="48%"
                    btnType="secondary"
                    style={styles.button}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 12,
        alignItems: 'center',
    },
    buttonContainer: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        height: hp('5%'),
    },
});

export default ConfirmationContent;


// To Call it
{/* <ConfirmationContent message='Are you sure to delete this task' onCancel={()=>{}} onConfirm={()=>{}} /> */}

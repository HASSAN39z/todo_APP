import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MyText, SmallBtn } from '@components'; // Adjust the import path based on your file structure
import { MY_COLORS } from '@constants'; // Adjust the import path based on your constants file

interface DetailProps {
    title: string;
    status: 'Completed' | 'Pending' | string;
    timestamp: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
    onComplete: () => void;
}

const Detail: React.FC<DetailProps> = ({ title, status, timestamp, description, onEdit, onDelete, onComplete }) => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <MyText color='white' p>{title}</MyText>
                    <MyText color={MY_COLORS.GREEN} cp bold>{status}</MyText>
                </View>
                <MyText color={MY_COLORS.TXT_DIM} cp>{timestamp}</MyText>
            </View>

            <MyText color="white" cp>{description}</MyText>

            <View style={styles.buttonContainer}>
                <SmallBtn title='Edit' onPress={onEdit} style={styles.button} />
                <SmallBtn title='Delete' onPress={onDelete} style={styles.button} />
                <SmallBtn title='Complete' onPress={onComplete} style={styles.button} />
            </View>

            <View style={styles.separator} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    button: {
        flex: 1,
    },
    separator: {
        height: 4,
        backgroundColor: MY_COLORS.YELLOW,
    },
});

export default Detail;


// To Call it
{/* <Detail description={description} onComplete={()=>{}} onDelete={()=>{}} onEdit={()=>{}} status='Pending' timestamp='Today At 16:45' title='Do Math Homework' /> */ }

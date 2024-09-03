import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import MyText from './MyText';
import { LAYOUT } from '@constants';

// Define the props interface for type safety
interface SmallBtnProps {
    onPress: () => void;
    title: string;
    style?: ViewStyle; // Optional additional styles
}

// SmallBtn component with props for customization
const SmallBtn: React.FC<SmallBtnProps> = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <MyText p color="black">{title}</MyText>
        </TouchableOpacity>
    );
};

export default SmallBtn;

// Styles moved to a StyleSheet object
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 8, paddingHorizontal: 12,
        backgroundColor: 'white',
        // Assuming LAYOUT.SHADOW is defined somewhere globally
        // Spread operator used to merge shadow style
        ...LAYOUT.SHADOW,
    },
});

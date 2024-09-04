import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { MyText, MyButton } from '@components'; // Adjust the import path based on your file structure
import { hp } from '@utils'; // Adjust the import path based on your utility file

interface FilterOptionsProps {
    onPrioritySelect: (priority: 'low' | 'medium' | 'high') => void;
    onDateSelect: (dateType: 'overdue' | 'upcoming') => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onPrioritySelect, onDateSelect }) => {
    const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high'>('low');
    const [selectedDate, setSelectedDate] = useState<'overdue' | 'upcoming'>('upcoming');

    useEffect(() => {
        // Notify parent components of the default selections when the component mounts
        onPrioritySelect(selectedPriority);
        onDateSelect(selectedDate);
    }, []);

    const handlePrioritySelect = (priority: 'low' | 'medium' | 'high') => {
        setSelectedPriority(priority);
        onPrioritySelect(priority);
    };

    const handleDateSelect = (dateType: 'overdue' | 'upcoming') => {
        setSelectedDate(dateType);
        onDateSelect(dateType);
    };

    return (
        <View style={styles.container}>
            <View style={styles.filterSection}>
                <MyText p color='white'>Priority</MyText>
                <View style={styles.buttonContainer}>
                    <MyButton
                        title='Low'
                        onPress={() => handlePrioritySelect('low')}
                        btnType={selectedPriority === 'low' ? 'primary' : 'secondary'}
                        style={styles.button}
                    />
                    <MyButton
                        title='Medium'
                        onPress={() => handlePrioritySelect('medium')}
                        btnType={selectedPriority === 'medium' ? 'primary' : 'secondary'}
                        style={styles.button}
                    />
                    <MyButton
                        title='High'
                        onPress={() => handlePrioritySelect('high')}
                        btnType={selectedPriority === 'high' ? 'primary' : 'secondary'}
                        style={styles.button}
                    />
                </View>
            </View>

            <View style={styles.filterSection}>
                <MyText p color='white'>Date</MyText>
                <View style={styles.buttonContainer}>
                    <MyButton
                        title='Overdue'
                        onPress={() => handleDateSelect('overdue')}
                        btnType={selectedDate === 'overdue' ? 'primary' : 'secondary'}
                        style={styles.button}
                    />
                    <MyButton
                        title='Upcoming'
                        onPress={() => handleDateSelect('upcoming')}
                        btnType={selectedDate === 'upcoming' ? 'primary' : 'secondary'}
                        style={styles.button}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    filterSection: {
        marginBottom: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10,
    },
    button: {
        height: hp('5%'),
        flex: 1,
    },
});

export default FilterOptions;



// To use
// const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high'>('high');
// const [selectedDate, setSelectedDate] = useState<'overdue' | 'upcoming'>('upcoming');

// <FilterOptions onPrioritySelect={(val)=>{setSelectedPriority(val)}} onDateSelect={(val)=>{setSelectedDate(val)}} />

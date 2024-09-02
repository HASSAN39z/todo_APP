import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { MyButton, PopupModal } from '@components';

interface Task {
    title: string;
    subtitle: string;
    priority: 'low' | 'medium' | 'high';
    isComplete: boolean;
    // Add other task properties as needed
}

interface DetailPopUpProps {
    task: Task;
    onClose: () => void;
}
const DetailPopUp: React.FC<DetailPopUpProps> = ({ task, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isCompleted, setIsCompleted] = useState(task.isComplete);

    return (
        <PopupModal isVisible={isVisible} onClose={onClose}>
            <View style={{ gap: 20, paddingVertical: 20 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>{task.title}</Text>
                        {isCompleted && <Text style={{ color: 'green', fontSize: 16 }}>Complete</Text>}
                    </View>
                    <Text style={{ color: 'gray', fontSize: 14 }}>{task.subtitle}</Text>
                </View>
                <View>
                    <Text style={{ color: 'white', marginVertical: 10 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur molestiae possimus eaque dolor temporibus nihil asperiores necessitatibus, quasi labore, quo voluptate deleniti quod exercitationem tempora aut dicta accusantium beatae.
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    {isCompleted ? (
                        <Text style={{ color: 'green', fontSize: 16 }}>Task is Complete</Text>
                    ) : (
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                                <MyButton title='Edit' onPress={() => { /* handle edit */ }} style={{ flex: 1, backgroundColor: 'gray' }} />
                                <MyButton title='Delete' onPress={() => { /* handle delete */ }} style={{ flex: 1, backgroundColor: 'gray' }} />
                                <MyButton title='Complete' onPress={() => setIsCompleted(true)} style={{ flex: 1, backgroundColor: 'gray' }} />
                            </View>
                            <View style={{ height: 2, backgroundColor: 'yellow', marginTop: 5 }} />
                        </View>
                    )}
                </View>
            </View>
        </PopupModal>
    );
};

export default DetailPopUp;

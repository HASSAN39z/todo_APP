import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { MyText, MyTextInput, MyButton, SmallBtn } from '@components';
import { hp } from '@utils';
import UserSelector from './SelectUser';

interface TaskManagementProps {
  selectedUser: { name: string; uid: string } | null,
  onTitleChange: (val: string) => void;
  onDescriptionChange: (val: string) => void;
  onDueDateChange: (val: string) => void;
  onPrioritySelect: (priority: string) => void;
  onUserSelect: (user: { name: string; uid: string }) => void;
  onSave: () => void;
  onCancel: () => void;
  titleValue: string;
  descriptionValue: string;
  dueDateValue: string;
  selectedPriority: string;
}

const TaskManagement: React.FC<TaskManagementProps> = ({
  selectedUser,
  onTitleChange,
  onDescriptionChange,
  onDueDateChange,
  onPrioritySelect,
  onUserSelect,
  onSave,
  onCancel,
  titleValue,
  descriptionValue,
  dueDateValue,
  selectedPriority,
}) => {
  const [showUserSelector, setShowUserSelector] = useState(false);

  const handleUserSelect = (user: { name: string; uid: string }) => {
    onUserSelect(user);
    setShowUserSelector(false);
  };
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

  console.log(selectedUser);

  return (
    <View style={{ maxHeight: hp(80), width: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 10, width: "100%" }}>
        <View style={{ gap: 10 }}>
          <MyText color='white'>Title</MyText>
          <MyTextInput
            placeholder='Enter title'
            value={titleValue}
            onChangeText={onTitleChange}
          />
        </View>

        <View style={{ gap: 10 }}>
          <MyText color='white'>Description</MyText>
          <MyTextInput
            placeholder='Enter description'
            value={descriptionValue}
            onChangeText={onDescriptionChange}
          />
        </View>

        <View style={{ gap: 10 }}>
          <MyText color='white'>Due Date</MyText>
          <MyTextInput
            placeholder='Enter due date'
            value={dueDateValue}
            onChangeText={onDueDateChange}
          />
        </View>

        <View>
          <MyText p color='white'>Priority</MyText>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 10 }}>
            <MyButton
              title='Low'
              onPress={() => onPrioritySelect('Low')}
              btnType={selectedPriority === 'Low' ? 'primary' : 'secondary'}
              style={{ height: hp('5%'), flex: 1 }}
            />
            <MyButton
              title='Medium'
              onPress={() => onPrioritySelect('Medium')}
              btnType={selectedPriority === 'Medium' ? 'primary' : 'secondary'}
              style={{ height: hp('5%'), flex: 1 }}
            />
            <MyButton
              title='High'
              onPress={() => onPrioritySelect('High')}
              btnType={selectedPriority === 'High' ? 'primary' : 'secondary'}
              style={{ height: hp('5%'), flex: 1 }}
            />
          </View>
        </View>
        <View>
          <MyText p color='white'>Assign to user</MyText>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 10, }}>
            <MyButton
              title={selectedUser ? selectedUser.name : 'Select User'}
              onPress={() => setShowUserSelector(!showUserSelector)}
              btnType='secondary'
              style={{ height: hp('5%'), flex: 1 }}
            />
          </View>
          {showUserSelector && <UserSelector onUserSelect={handleUserSelect} />}
        </View>

        <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center' }}>
          <SmallBtn title='Save' onPress={onSave} />
          <SmallBtn title='Cancel' onPress={onCancel} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskManagement;





// To use

// const [isModalVisible, setIsModalVisible] = useState(true);
// const [title, setTitle] = useState('');
// const [description, setDescription] = useState('');
// const [dueDate, setDueDate] = useState('');
// const [priority, setPriority] = useState('High');
// const [selectedUser, setSelectedUser] = useState('');

// const handleSave = () => {
//     // Save logic
//     console.log('Task saved:', { title, description, dueDate, priority, selectedUser });
//     setIsModalVisible(false);
//   };
//   const handleCancel = () => {
//     // Cancel logic
//     setIsModalVisible(false);
//   };


// <TaskManagement
//         onTitleChange={(val: string) => setTitle(val)}
//         onDescriptionChange={ (val: string) => setDescription(val)}
//         onDueDateChange={(val: string) => setDueDate(val)}
//         onPrioritySelect={(priority: string) => setPriority(priority)}
//         onUserSelect={()=>{}}
//         onSave={handleSave}
//         onCancel={handleCancel}
//         titleValue={title}
//         descriptionValue={description}
//         dueDateValue={dueDate}
//         selectedPriority={priority}
//       />
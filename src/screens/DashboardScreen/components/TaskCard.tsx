import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MyText } from '@components';
import { MY_COLORS } from '@constants';

// Define the props for the TaskCard component
interface TaskCardProps {
  title: string;
  subtitle: string;
  priority: 'low' | 'medium' | 'high'; // Priority levels
  isComplete: boolean; // Whether the task is complete or not
  onPress: () => void; // Callback function for press action
}

// Define a mapping of priority to color
const priorityColors = {
  low: MY_COLORS.GREEN,
  medium: MY_COLORS.YELLOW,
  high: MY_COLORS.RED,
};

const TaskCard: React.FC<TaskCardProps> = ({ title, subtitle, priority, isComplete, onPress }) => {
  // Determine the color based on the priority
  const statusColor = priorityColors[priority];
  const statusText = isComplete ? 'Complete' : 'Incomplete';

  return (
    <TouchableOpacity style={[styles.cardContainer, { borderColor: statusColor }]} onPress={onPress}>
      <View>
        <MyText color='white' p>{title}</MyText>
        <MyText color='#AFAFAF' cp>{subtitle}</MyText>
      </View>
      <MyText color={statusColor} cp>{statusText}</MyText>
    </TouchableOpacity>
  );
};

export default TaskCard;

// Styles using StyleSheet for better performance and organization
const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    backgroundColor: MY_COLORS.PRIMARY,
    padding: 12,
    borderRightWidth: 20, // Assuming adjust function is not needed, directly using 20
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

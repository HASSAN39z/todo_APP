import { MY_COLORS } from '@constants';
import React, { ReactNode } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';

interface PopupModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({ isVisible, onClose, children }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: MY_COLORS.PRIMARY,
    padding: 12,
    borderRadius: 8,
    width: '95%',
    alignItems: 'center',
  },
});

export default PopupModal;
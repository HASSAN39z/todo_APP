import { MY_COLORS } from '@constants';
import { adjust } from '@utils';
import React, { ReactNode } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import SmallBtn from '../SmallBtn';
import MyText from '../MyText';

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
      {/* <TouchableWithoutFeedback onPress={onClose}> */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity  onPress={onClose} style={{alignSelf:"flex-end",paddingHorizontal:12,paddingVertical:12,position:"absolute", right:0, top:-50}}>
              <MyText color='white'>Close</MyText>
            </TouchableOpacity>
            {children}
          </View>
        </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingHorizontal:adjust(12)
  },
  modalContent: {
    width:"100%",
    // borderWidth:2,
    // borderColor:"red",
    backgroundColor: MY_COLORS.PRIMARY,
    paddingVertical:20,
    paddingHorizontal:12,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default PopupModal;
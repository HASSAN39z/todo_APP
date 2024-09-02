import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const PopupModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modal} >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>This is a modal!</Text>
        <Button title="Close" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    width: 300,
    height: 200,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default PopupModal;

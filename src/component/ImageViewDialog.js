import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Modal, ModalContent } from 'react-native-modals';
const ImageViewDialog = ({ imagePath, visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            onTouchOutside={() => {
                onClose();
            }}
        >
            <ModalContent>
                <View style={styles.container}>
                    <View style={styles.modalContainer}>
                        <Image source={{ uri: `file://${imagePath}` }} style={styles.image} />
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalContent>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 8,
    },
    closeButton: {
        marginTop: 10,
    },
    closeButtonText: {
        color: 'blue',
    },
});

export default ImageViewDialog;
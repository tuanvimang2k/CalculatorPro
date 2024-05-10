import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState,useContext } from 'react'
import { Modal, ModalContent } from 'react-native-modals';
import { Button } from 'react-native'
import { HomeContext } from '../context/HomeProvider'
import { updateLocalPass } from '../service/user';
const DialogChangePass = ({ visible, setVisible }) => {
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const {password,savePassword,user} = useContext(HomeContext)
    const handleSetLocalpass = async () => {
        try {
            const response = await updateLocalPass(user, newPass)
            savePassword(newPass)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <Modal
                visible={visible}
                onTouchOutside={() => {
                    setVisible(!visible);
                }}
            >
                <ModalContent>
                    <TextInput
                        style={{width:200, height: 50, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="Old Password"
                        onChangeText={text => {
                            if (isNaN(text)) {
                                Alert.alert('Invalid input', 'Please enter a numeric value')
                            } else if (text.includes(' ')) {
                                Alert.alert('Invalid input', 'Spaces are not allowed')
                            } else {
                                setOldPass(text)
                            }
                        }}
                        value={oldPass}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="New Password"
                        onChangeText={text => {
                            if (isNaN(text)) {
                                Alert.alert('Invalid input', 'Please enter a numeric value')
                            } else if (text.includes(' ')) {
                                Alert.alert('Invalid input', 'Spaces are not allowed')
                            } else {
                                setNewPass(text)
                            }
                        }}
                        value={newPass}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="Confirm Password"
                        onChangeText={text => {
                            if (isNaN(text)) {
                                Alert.alert('Invalid input', 'Please enter a numeric value')
                            } else if (text.includes(' ')) {
                                Alert.alert('Invalid input', 'Spaces are not allowed')
                            } else {
                                setConfirmPass(text)
                            }
                        }}
                        value={confirmPass}
                        keyboardType="numeric"
                    />
                    <Button
                        title='Save'
                        color={'#ff9500'}
                        onPress={() => {
                            if (oldPass === '' || newPass === '' || confirmPass === '') {
                                Alert.alert('Invalid input', 'Please fill all fields')
                            }else if(oldPass !== password){
                                Alert.alert('Invalid input', 'Old password is incorrect')
                            }else if (newPass !== confirmPass) {
                                Alert.alert('Invalid input', 'New password and confirm password does not match')
                            } else {
                                // savePassword(newPass)
                                handleSetLocalpass()
                                setVisible(!visible)
                                Alert.alert('Success', 'Password has been changed')
                            }
                             
                        }}
                    />
                </ModalContent>
            </Modal>
        </View>
    )
}

export default DialogChangePass

const styles = StyleSheet.create({})
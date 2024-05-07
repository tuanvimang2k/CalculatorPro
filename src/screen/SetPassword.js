import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState,useContext } from 'react'
import { HomeContext } from '../context/HomeProvider'
const SetPassword = () => {
    const [txtpassword, setTxtPassword] = useState('')
    const {savePassword} = useContext(HomeContext)
    const handlePasswordChange = (text) => {
        // Check if the new text is numeric
        if (isNaN(text)) {
            Alert.alert('Invalid input', 'Please enter a numeric value')
        } else if (text.includes(' ')) {
            Alert.alert('Invalid input', 'Spaces are not allowed')
        } else {
            setTxtPassword(text)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.txtInputView}>
                <Text style={styles.txtHeader}>Enter your password</Text>
                <TextInput
                    placeholder="0000"
                    keyboardType="numeric"
                    value={txtpassword}
                    onChangeText={handlePasswordChange}
                    style={styles.txtinput}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity 
                    onPress={() => { savePassword(txtpassword)}}
                    style={styles.btnSave}
                    >
                        <Text style={styles.txtSave}>save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    txtInputView: {
        width: '80%',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 10,
        // padding: 10
    },
    txtinput:{
        padding: 10,
        // textAlign: 'center',
    },
    txtHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#ff9500',
        textAlign: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontFamily: 'Roboto',
    },
    btnSave:{
        backgroundColor: '#ff9500',
        width: '50%',
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10


    },
    txtSave:{
        color: 'balck',
        fontSize: 20
    }
})
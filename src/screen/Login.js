import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log('>>>>>>>>>>>>>>>>>')
    console.log('username',username)
    console.log('password',password) 
  },[username,password])
  const handleOnchange = (text,setText) => {
    setText(text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleOnchange(text,setUsername)}
        value={username}
        placeholder="Username"
        placeholderTextColor="#ff9500"
        borderRadius={20}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleOnchange(text,setPassword)}
        value={password}
        placeholder="Password"
        placeholderTextColor="#ff9500"
        secureTextEntry
        borderRadius={20}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { }} style={styles.registerButton}>
          <Text style={styles.registerText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ff9500',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ff9500',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  registerButton: {
    width: '40%',
    backgroundColor: '#ff9500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
});

import React, { useState,useEffect,useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity,Alert } from 'react-native';
import { login } from '../service/user';
import { HomeContext } from '../context/HomeProvider';
const Login = ({navigation}) => {
  useEffect(() => {
    console.log('Login Screen user',user);
  }, [user]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {saveUser,savePassword,user} = useContext(HomeContext);
  const [loginStatus, setLoginStatus] = useState(false);
  const handleLogin = async () => {
    try {
      if (!username || !password) {
        Alert.alert("Error", "Please enter username and password");
        setLoginStatus(false);
        return;
      }
  
      setLoginStatus(true);
      const response = await login(username, password);
      console.log(response);
      if (response.data) {
        saveUser(response.data._id);
        console.log('user', user);
      }
      if (response.data.localPass) {
        savePassword(response.data.localPass);
        console.log('password', response.data.localPass);
      }
      setLoginStatus(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to login. Please try again.");
      setLoginStatus(false);
    }
  };
  
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
        <TouchableOpacity onPress={() => handleLogin()} style={styles.registerButton}>
          <Text style={styles.registerText}>{loginStatus?'Loading':"Login"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  navigation.navigate('Register') } style={styles.registerButton}>
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

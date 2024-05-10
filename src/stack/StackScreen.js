import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from '../screen/Calculator';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import SetPassword from '../screen/SetPassword';
import Login from '../screen/Login';
import Register from '../screen/Register';
const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default StackScreen
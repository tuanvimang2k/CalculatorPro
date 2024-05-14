import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../screen/Setting';
import More from '../screen/More';
import Cloud from '../screen/Cloud';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HomeStack from '../stack/HomeStack';
import { AppState } from 'react-native';
import moment from 'moment';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({ navigation }) => {
  const formattedDateMoment = moment().format('DD/MM/YYYY');
  console.log('Now is'," "+typeof formattedDateMoment+" "+formattedDateMoment); // string
  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        console.log('App has moved to the background or become inactive');
        navigation.navigate('Calculator');
      }
    };
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      appStateSubscription.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff9500', // Thay đổi màu của icon khi được chọn
        tabBarInactiveTintColor: '#000000', // Màu của icon khi không được chọn
        tabBarStyle: {
          display: 'flex',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="tool" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="ellipsis1" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Cloud"
        component={Cloud}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;

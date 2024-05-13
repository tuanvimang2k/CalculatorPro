import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import More from '../screen/More';
import Cloud from '../screen/Cloud';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HomeStack from '../stack/HomeStack';
import {AppState} from 'react-native';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({navigation}) => {
  const [currentRouteName, setCurrentRouteName] = useState('');
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      const routeName = e.data.state.routes[e.data.state.index].name;
      setCurrentRouteName(routeName);
    });

    return unsubscribe;
  }, [navigation]);
  console.log(currentRouteName);
  useEffect(() => {
    const handleAppStateChange = nextAppState => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        // if (currentRouteName !== 'BottomTabNavigation') {
          console.log('App has moved to the background or become inactive');
          navigation.navigate('Calculator');
        // }
      }
    };

    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      appStateSubscription.remove();
    };
  }, [navigation, currentRouteName]);
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
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="tool" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="ellipsis1" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Cloud"
        component={Cloud}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={30} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;

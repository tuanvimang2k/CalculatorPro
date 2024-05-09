import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VideoScreen from '../screen/Video';
import ImageScreen from '../screen/ImageScreen';
const Tab = createMaterialTopTabNavigator();
const TopTabGallery = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
        }}
        >
            <Tab.Screen name="Image" component={ImageScreen} />
            <Tab.Screen name="Video" component={VideoScreen} />
        </Tab.Navigator>
    );

};
export default TopTabGallery;

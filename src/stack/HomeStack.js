import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../screen/Home';
import ImageList from '../screen/ImageList';
import VideoScreen from '../screen/Video';
import VideoList from '../screen/VideoList';
import TopTabGallery from '../navigation/TopTabGallery';
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ImageList" component={ImageList} />
            <Stack.Screen name="Video" component={VideoScreen} />
            <Stack.Screen name="VideoList" component={VideoList} />
            <Stack.Screen name="TopTabGallery" component={TopTabGallery} />
        </Stack.Navigator>
    )
}
export default HomeStack
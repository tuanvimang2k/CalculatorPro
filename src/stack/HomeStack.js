import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../screen/Home';
import Gallery from '../screen/Gallery';
import ImageList from '../screen/ImageList';
import VideoScreen from '../screen/Video';
import VideoList from '../screen/VideoList';
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
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="ImageList" component={ImageList} />
            <Stack.Screen name="Video" component={VideoScreen} />
            <Stack.Screen name="VideoList" component={VideoList} />
        </Stack.Navigator>
    )
}
export default HomeStack
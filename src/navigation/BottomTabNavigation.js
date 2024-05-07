import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import More from '../screen/More';
import Cloud from '../screen/Cloud';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Setting} />
            <Tab.Screen name="More" component={More} />
            <Tab.Screen name="Cloud" component={Cloud} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigation
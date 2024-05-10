import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import More from '../screen/More';
import Cloud from '../screen/Cloud';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import HomeStack from '../stack/HomeStack';
import { AppState } from 'react-native';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({ navigation }) => {
    useEffect(() => {
        // Hàm xử lý khi trạng thái của ứng dụng thay đổi
        const handleAppStateChange = (nextAppState) => {
            // Kiểm tra nếu ứng dụng chuyển sang trạng thái nền hoặc không hoạt động
            if (nextAppState === 'background' || nextAppState === 'inactive') {
                // Log ra thông báo nếu ứng dụng chuyển sang nền hoặc không hoạt động
                console.log('App has moved to the background or become inactive');
                navigation.navigate('Calculator');
            }
        };

        // Đăng ký một hàm lắng nghe sự kiện thay đổi trạng thái của ứng dụng
        const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

        // Hàm cleanup: Gỡ bỏ hàm lắng nghe khi component bị unmounted hoặc dependencies thay đổi
        return () => {
            // Gỡ bỏ hàm lắng nghe sự kiện thay đổi trạng thái của ứng dụng
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
                    display: 'flex'
                }
            }}
        >
            <Tab.Screen name="HomeStack" component={HomeStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={30} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="tool" color={color} size={30} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen name="More" component={More}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="ellipsis1" color={color} size={30} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen name="Cloud" component={Cloud}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={30} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomTabNavigation
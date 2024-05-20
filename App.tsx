/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './src/stack/StackScreen';
import { HomeProvider } from './src/context/HomeProvider';
import AppNavigation from './src/navigation/AppNavigtion';
import { ModalPortal } from 'react-native-modals';
import Login from './src/screen/Login';
import VnpayExample from './src/screen/VnpayExample';
import MyWebComponent from './src/screen/TestVNpay';
function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <HomeProvider>
        <AppNavigation />
        <ModalPortal />
      </HomeProvider>
      {/* <MyWebComponent /> */}
    </SafeAreaView>
  );
}


export default App;

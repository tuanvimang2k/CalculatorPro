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
import Calculator from './src/screen/Calculator';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;

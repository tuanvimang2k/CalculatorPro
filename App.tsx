/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Calculator from './src/screen/Calculator';


function App(): React.JSX.Element {
  
  return (
    <SafeAreaView style ={{flex:1}} >
      <Calculator/>
    </SafeAreaView>
  );
}


export default App;

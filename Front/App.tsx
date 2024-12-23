/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigates/AppNavigator';
import SplashScreen from 'react-native-splash-screen';


function App(): React.JSX.Element {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
          <AppNavigator />
      </SafeAreaView> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

export default App;

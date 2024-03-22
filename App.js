import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './Navigation/AppStack';
import {StatusBar} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthContextProvider from './Navigation/AuthContext';
export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
      <StatusBar
        animated={true}
        backgroundColor="#0A9484"
       barStyle={"light-content"}
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
      <AppStack />
      </GestureHandlerRootView>
      </AuthContextProvider>
    </NavigationContainer>


  );
}



import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen';
import SignInScreen from './src/SigninScreen';
import FireStoreScreen from './src/FireStoreScreen';
import GoogleScreen from './src/GoogleScreen';
import FaceBookScreen from './src/FaceBookScreen';

import Home from './src/Home';


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
          <Stack.Screen name="Signin" component={SignInScreen} options={{ header: () => null }} />
          <Stack.Screen name="FireStore" component={FireStoreScreen} options={{ header: () => null }} />
          <Stack.Screen name="GoogleSignIn" component={GoogleScreen} options={{ header: () => null }} />
          <Stack.Screen name="FaceBookSignIn" component={FaceBookScreen} options={{ header: () => null }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
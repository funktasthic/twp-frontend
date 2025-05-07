import React from 'react';
import HomeScreen from '../features/home/screens/HomeScreen';
import LoginScreen from '../features/auth/login/screens/LoginScreen';

import { createStackNavigator } from '@react-navigation/stack';

export type StackParamsList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<StackParamsList>();

export const AppStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
};

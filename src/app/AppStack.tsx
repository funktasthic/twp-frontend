import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../features/home/screens/HomeScreen';

export type StackParamsList = {
  Home: undefined;
};

const Stack = createStackNavigator<StackParamsList>();

export const AppStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
};

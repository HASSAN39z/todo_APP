import { createStackNavigator } from '@react-navigation/stack';
import {  DashboardScreen } from '@screens';
import React from 'react';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'DASHBOARD'}>
      <Stack.Screen  name={'DASHBOARD'} component={DashboardScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStack;


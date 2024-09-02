import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ProfileScreen } from '@screens';
import { HomeStack } from '../stack';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={'HOME_STACK'} component={HomeStack} options={{ headerShown: false }}/>
                <Tab.Screen name={'PROFILE_SCREEN'} component={ProfileScreen} options={{ headerShown: false }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigation;

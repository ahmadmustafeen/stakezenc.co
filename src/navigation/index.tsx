import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AuthNavigator} from './authnavigator';
import DrawerNavigator from './drawernavigation';

const Navigator = () => {
  const StackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="auth">
        <StackNavigator.Screen name="auth" component={AuthNavigator} />
        <StackNavigator.Screen name="drawer" component={DrawerNavigator} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

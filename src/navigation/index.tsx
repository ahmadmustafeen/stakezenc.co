import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthNavigator} from './authnavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

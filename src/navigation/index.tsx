import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {AuthNavigator} from './authnavigator';
import DrawerNavigator from './drawernavigation';
import authContext from '../context/authContext';

const Navigator = () => {
  const StackNavigator = createStackNavigator();

  const {data} = useContext(authContext);

  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{headerShown: false}}>
        {data?.isLoggedIn ? (
          <StackNavigator.Screen name="dashboard" component={DrawerNavigator} />
        ) : (
          // <DrawerNavigator />
          // <StackNavigator.Navigator screenOptions={{headerShown: false}}>
          // </StackNavigator.Navigator>
          // <AuthNavigator />
          <StackNavigator.Screen name="auth" component={AuthNavigator} />

          // <StackNavigator.Navigator screenOptions={{headerShown: false}}>
          //   <StackNavigator.Screen name="auth" component={AuthNavigator} />
          // </StackNavigator.Navigator>
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

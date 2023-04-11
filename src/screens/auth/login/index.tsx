/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {View} from 'react-native';
import React from 'react';
import {secondaryBlue} from '../../../constants';
import {AppHeader, InputWithLabel} from '../../../components';
import {styles} from './style';

const AuthHeaderTail = () => {
  return (
    <View
      style={{
        backgroundColor: secondaryBlue,
        height: 40,
        width: '100%',
        borderBottomLeftRadius: 400,
        borderBottomRightRadius: 400,
      }}></View>
  );
};
const AuthHeader = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: secondaryBlue,
          height: 100,
          width: '100%',
        }}></View>
      <AuthHeaderTail />
    </>
  );
};

const Login = () => {
  return (
    <View style={styles.container}>
      <AuthHeader />
      <View style={styles.contentContainer}>
        <AppHeader title="Sign In" />
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Password" secureTextEntry />
        </View>
      </View>
    </View>
  );
};

export default Login;

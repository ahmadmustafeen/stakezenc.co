/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {ScrollView, View} from 'react-native';
import React from 'react';
import {secondaryBlue} from '../../../constants';
import {
  AppHeader,
  AppText,
  AppButton,
  InputWithLabel,
} from '../../../components';
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
          paddingBottom: 10,
          paddingTop: 30,
          width: '100%',
        }}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <AppText white heading bold center>
            Register Now
          </AppText>
        </View>
        <View style={{width: '85%', alignSelf: 'center'}}>
          <AppText white smallText center semibold>
            If you are not member of this website then create your account for
            successfull login
          </AppText>
        </View>
        <View style={{paddingVertical: 15}}>
          <AppButton label="Sign up" transparent />
        </View>
      </View>
      {/* <AuthHeaderTail /> */}
    </>
  );
};

const Login = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: secondaryBlue,
        }}>
        <AuthHeader />
      </View>
      <AuthHeaderTail />
      <View style={styles.contentContainer}>
        <AppHeader title="Sign in" />
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Password" secureTextEntry />
        </View>
        <View style={{paddingVertical: 15}}>
          <AppButton label="Login" uppercase />
        </View>
        <View style={{marginVertical: 10}}>
          <AppText white center secondary text bold>
            Forgot Password?
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

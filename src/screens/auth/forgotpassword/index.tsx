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
            Already Account
          </AppText>
        </View>
        <View style={{width: '85%', alignSelf: 'center'}}>
          <AppText white smallText center semibold>
            Use your Account and type the username and password to sign in
            privately.
          </AppText>
        </View>
        <View style={{paddingVertical: 15}}>
          <AppButton label="Sign in" transparent uppercase />
        </View>
      </View>
    </>
  );
};

const ForgotPassword = () => {
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
        <AppHeader title="Forgot Password" />
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Email" />
        </View>
        <View style={{paddingVertical: 15}}>
          <AppButton label="Reset Password" uppercase width={160} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

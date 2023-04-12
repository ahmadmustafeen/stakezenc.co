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
            Already Have Account?
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
      {/* <AuthHeaderTail /> */}
    </>
  );
};

const Register = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <AppHeader title="Sign up" />
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Sponsor Id" />
        </View>
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Full name" />
        </View>
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Password" />
        </View>
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Country Flag" />
        </View>
        <AppText white center secondary smallText bold>
          I read and agree to the Terms & Conditions
        </AppText>
        <View style={{paddingTop: 15}}>
          <AppButton label="Sign Up" uppercase />
        </View>
      </View>
      <View style={{width: '100%'}}>
        <View
          style={{
            backgroundColor: secondaryBlue,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <AuthHeader />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

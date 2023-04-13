/* eslint-disable react-native/no-inline-styles */

import {ScrollView, View} from 'react-native';
import React from 'react';
import {AppHeader, AppButton, InputWithLabel} from '../../../components';
import {styles} from './style';

const ResetPassword = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        width: '100%',
        flex: 1,
      }}>
      <View style={styles.contentContainer}>
        <AppHeader title="Enter New Password" />
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Password" secureTextEntry />
        </View>
        <View style={styles.inputContainer}>
          <InputWithLabel placeholder="Confirm Password" secureTextEntry />
        </View>
        <View style={{paddingVertical: 15}}>
          <AppButton label="Reset Password" uppercase width={150} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

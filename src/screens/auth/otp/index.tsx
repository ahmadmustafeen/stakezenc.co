/* eslint-disable react-native/no-inline-styles */

import {ScrollView, View} from 'react-native';
import React from 'react';
import {AppHeader, AppButton, InputWithLabel} from '../../../components';
import {styles} from './style';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {white} from '../../../constants';

const OTPScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        width: '100%',
        flex: 1,
      }}>
      <View style={styles.contentContainer}>
        <AppHeader title="Verify OTP" />
        <View style={styles.inputContainer}>
          <OTPInputView
            style={{width: '75%', height: 100}}
            codeInputFieldStyle={{
              color: white,
              fontWeight: 'bold',
              fontSize: 22,
            }}
            pinCount={4}
            autoFocusOnLoad
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <View style={{paddingVertical: 15}}>
          <AppButton label="Verify OTP" uppercase />
        </View>
      </View>
    </ScrollView>
  );
};

export default OTPScreen;

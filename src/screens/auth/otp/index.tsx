/* eslint-disable react-native/no-inline-styles */

import {Alert, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader, AppButton} from '../../../components';
import {styles} from './style';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {white} from '../../../constants';
import {AlertPrompt} from '../../../components/AlertPrompt';
import {RESET_PASSWORD_SCREEN} from '../../../constants/screen';

const OTPScreen = (props: any) => {
  const {navigation} = props;
  const [state, setState] = useState({otp: ''});
  const [error, setError] = useState({
    hasError: false,
    title: '',
    message: '',
  });

  const handleChange = (key: string, value: string | number) =>
    setState({...state, [key]: value});

  const validation = () => {
    if (!state.otp) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'OTP Required!',
      });
      return false;
    }

    return true;
  };

  const onOTPSubmit = () => {
    if (!validation()) {
      return false;
    }

    Alert.alert(
      'OTP Success',
      'This will redirect to the Reset Password if OTP is correct',
    );
    navigation.navigate(RESET_PASSWORD_SCREEN);
  };
  return (
    <>
      <AlertPrompt
        isVisible={error.hasError}
        message={error.message}
        title={error.title}
        onPressRetry={() => setError({hasError: false, title: '', message: ''})}
      />
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
              code={state.otp}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
              onCodeChanged={e => handleChange('otp', e)}
            />
          </View>
          <View style={{paddingVertical: 15}}>
            <AppButton label="Verify OTP" uppercase onPress={onOTPSubmit} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default OTPScreen;

/* eslint-disable react-native/no-inline-styles */

import {Alert, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {AppHeader, AppButton, InputWithLabel} from '../../../components';
import {styles} from './style';
import {SUCCESS_MESSAGE_SCREEN} from '../../../constants/screen';
import {AlertPrompt} from '../../../components/AlertPrompt';

const ResetPassword = (props: any) => {
  const {navigation} = props;
  const [state, setState] = useState({password: '', confirmPassword: ''});
  const [error, setError] = useState({
    hasError: false,
    title: '',
    message: '',
  });

  const handleChange = (key: string, value: string | number) =>
    setState({...state, [key]: value});

  const validation = () => {
    if (!state.password) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Password Required!',
      });
      return false;
    }
    if (!state.confirmPassword) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Confirm Password Required!',
      });
      return false;
    }
    if (state.password !== state.confirmPassword) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Password dont match!',
      });
      return false;
    }

    return true;
  };

  const onResetPassword = () => {
    if (!validation()) {
      return false;
    }

    Alert.alert(
      'RESET PASSWORD Success',
      'This will redirect to the Success Message Screen if RESET PASSWORD is correct',
    );
    navigation.navigate(SUCCESS_MESSAGE_SCREEN);
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
          <AppHeader title="Enter New Password" />
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Password"
              secureTextEntry
              value={state.password}
              onChangeText={e => handleChange('password', e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Confirm Password"
              secureTextEntry
              value={state.confirmPassword}
              onChangeText={e => handleChange('confirmPassword', e)}
            />
          </View>
          <View style={{paddingVertical: 15}}>
            <AppButton
              label="Reset Password"
              uppercase
              width={150}
              onPress={onResetPassword}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ResetPassword;

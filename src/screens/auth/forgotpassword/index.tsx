/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {Alert, ScrollView, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {BASE_URL, secondaryBlue} from '../../../constants';
import {
  AppHeader,
  AppText,
  AppButton,
  InputWithLabel,
} from '../../../components';
import {styles} from './style';
import {LOGIN_SCREEN} from '../../../constants/screen';
import {AlertPrompt} from '../../../components/AlertPrompt';
import AuthContext from '../../../context/authContext';
import axios from 'axios';

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

const AuthHeader = (props: any) => {
  const {navigateToSignIn} = props;
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
          <AppButton
            label="Sign in"
            transparent
            uppercase
            onPress={navigateToSignIn}
          />
        </View>
      </View>
    </>
  );
};

const ForgotPassword = (props: any) => {
  const {navigation} = props;
  const [state, setState] = useState({username: ''});
  const [error, setError] = useState({
    hasError: false,
    title: '',
    message: '',
  });
  const {data, setContextData} = useContext(AuthContext);

  const handleChange = (key: string, value: string | number) =>
    setState({...state, [key]: value});

  const validation = () => {
    if (!state.username) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Username Required!',
      });
      return false;
    }

    return true;
  };

  const onApplyForgotPassword = () => {
    if (!validation()) {
      return false;
    }
    // @ts-ignore
    setContextData((contextData: any) => ({...contextData, apiLoader: true}));
    axios
      .post(`${BASE_URL}/auth/forgotPassword`, state)
      .then((res: any) => {
        if (res) {
          // @ts-ignore
          setContextData({isLoggedIn: true, user: res.data});
        }
      })
      .catch(err => {
        console.log({err: err.message});
        Alert.alert('Forgot Password Failed', 'SERVER DOWN');
      })
      .finally(() => {
        // @ts-ignore
        setContextData((contextData: any) => ({
          ...contextData,
          apiLoader: false,
        }));
      });
  };
  return (
    <>
      <AlertPrompt
        isVisible={error.hasError}
        message={error.message}
        title={error.title}
        onPressRetry={() => setError({hasError: false, title: '', message: ''})}
      />
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: secondaryBlue,
          }}>
          <AuthHeader
            navigateToSignIn={() => navigation.navigate(LOGIN_SCREEN)}
          />
        </View>
        <AuthHeaderTail />
        <View style={styles.contentContainer}>
          <AppHeader title="Forgot Password" />
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Username/Email"
              value={state.username}
              onChangeText={e => handleChange('username', e)}
            />
          </View>
          <View style={{paddingVertical: 15}}>
            <AppButton
              loader={data?.apiLoader}
              label="Reset Password"
              uppercase
              width={160}
              onPress={onApplyForgotPassword}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPassword;

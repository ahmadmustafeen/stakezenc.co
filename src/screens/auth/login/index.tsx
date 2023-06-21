/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Alert, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {BASE_URL, secondaryBlue} from '../../../constants';
import {
  AppHeader,
  AppText,
  AppButton,
  InputWithLabel,
} from '../../../components';
import {styles} from './style';
import {
  FORGOT_PASSWORD_SCREEN,
  REGISTER_SCREEN,
} from '../../../constants/screen';
import {AuthHeaderProps} from '../../../types';
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

const AuthHeader = (props: AuthHeaderProps) => {
  const {onPress} = props;

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
          <AppButton label="Sign up" transparent onPress={onPress} />
        </View>
      </View>
    </>
  );
};

const Login = (props: any) => {
  const [state, setState] = useState({
    username: __DEV__ ? 'ahmad_mustafeen' : '',
    password: __DEV__ ? 'ahmad_mustafeen' : '',
  });
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
    if (!state.password) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Password Required!',
      });
      return false;
    }
    return true;
  };

  const onLogin = () => {
    if (!validation()) {
      return false;
    }
    // @ts-ignore
    setContextData((contextData: any) => ({...contextData, apiLoader: true}));
    axios
      .post(`${BASE_URL}/auth/login`, state)
      .then((res: any) => {
        if (res) {
          // @ts-ignore
          setContextData({isLoggedIn: true, user: res.data});
        }
      })
      .catch(err => {
        console.log({err: err.message});
        Alert.alert('Login Failed', 'Wrong Credentials');
      })
      .finally(() => {
        // @ts-ignore
        setContextData((contextData: any) => ({
          ...contextData,
          apiLoader: false,
        }));
      });
  };

  const navigateToForgotPassword = () =>
    props.navigation.navigate(FORGOT_PASSWORD_SCREEN);

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
            onPress={() => props.navigation.navigate(REGISTER_SCREEN)}
          />
        </View>
        <AuthHeaderTail />
        <View style={styles.contentContainer}>
          <AppHeader title="Sign in" />
          <View style={styles.inputContainer}>
            <InputWithLabel
              value={state.username}
              placeholder="Username"
              onChangeText={value => handleChange('username', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Password"
              value={state.password}
              secureTextEntry
              onChangeText={value => handleChange('password', value)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              label="Login"
              uppercase
              onPress={onLogin}
              loader={data?.apiLoader}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={navigateToForgotPassword}>
            <AppText white center secondary text bold>
              Forgot Password?
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

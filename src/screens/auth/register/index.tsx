import {Alert, ScrollView, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  AppHeader,
  AppText,
  AppButton,
  InputWithLabel,
} from '../../../components';
import {styles} from './style';
import {AlertPrompt} from '../../../components/AlertPrompt';
import {LOGIN_SCREEN} from '../../../constants/screen';
import axios from 'axios';
import AuthContext from '../../../context/authContext';
import {BASE_URL} from '../../../constants';

const AuthHeader = (props: any) => {
  const {navigateToSignIn} = props;
  return (
    <>
      <View style={styles.headerComponentContainer}>
        <View style={styles.headerComponentTitleContainer}>
          <AppText white heading bold center>
            Already Have Account?
          </AppText>
        </View>
        <View style={styles.headerComponentDescContainer}>
          <AppText white smallText center semibold>
            Use your Account and type the username and password to sign in
            privately.
          </AppText>
        </View>
        <View style={styles.headerComponentButtonContainer}>
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

const Register = (props: any) => {
  const {navigation} = props;
  const [state, setState] = useState({
    sponsorId: '',
    fullName: '',
    username: '',
    password: '',
    country: '',
    agreed: false,
  });
  const [error, setError] = useState({
    hasError: false,
    title: '',
    message: '',
  });

  const validation = () => {
    if (!state.username) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Username Required!',
      });
      return false;
    }
    if (!state.fullName) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Full Name Required!',
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
    if (!state.country) {
      setError({
        hasError: true,
        title: 'Validation Error',
        message: 'Country Required!',
      });
      return false;
    }
    return true;
  };

  const {data, setContextData} = useContext(AuthContext);

  const onRegister = () => {
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
        Alert.alert('Registration Failed', 'SERVER DOWN');
      })
      .finally(() => {
        // @ts-ignore
        setContextData((contextData: any) => ({
          ...contextData,
          apiLoader: false,
        }));
      });
  };

  const handleChange = (key: string, value: string | number) =>
    setState({...state, [key]: value});

  return (
    <>
      <AlertPrompt
        isVisible={error.hasError}
        message={error.message}
        title={error.title}
        onPressRetry={() => setError({hasError: false, title: '', message: ''})}
      />
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <AppHeader title="Sign up" />
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Sponsor Id"
              value={state.sponsorId}
              onChangeText={value => handleChange('sponsorId', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Username"
              value={state.username}
              onChangeText={value => handleChange('username', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Full name"
              value={state.fullName}
              onChangeText={value => handleChange('fullName', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Password"
              value={state.password}
              onChangeText={value => handleChange('password', value)}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputWithLabel
              placeholder="Country"
              value={state.country}
              onChangeText={value => handleChange('country', value)}
            />
          </View>
          <AppText white center secondary smallText bold>
            I read and agree to the Terms & Conditions
          </AppText>
          <View style={styles.buttonContainer}>
            <AppButton
              label="Sign Up"
              uppercase
              onPress={onRegister}
              loader={data?.apiLoader}
            />
          </View>
        </View>
        <View style={styles.headerContainer}>
          <AuthHeader
            navigateToSignIn={() => navigation.navigate(LOGIN_SCREEN)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Register;

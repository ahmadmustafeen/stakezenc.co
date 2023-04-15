/* eslint-disable react/react-in-jsx-scope */
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import SuccessScreen from '../screens/auth/success';
import OTPScreen from '../screens/auth/otp';
import ForgotPassword from '../screens/auth/forgotpassword';
import ResetPassword from '../screens/auth/resetpassword';
import {createStackNavigator} from '@react-navigation/stack';

import {
  FORGOT_PASSWORD_SCREEN,
  LOGIN_SCREEN,
  OTP_SCREEN,
  REGISTER_SCREEN,
  RESET_PASSWORD_SCREEN,
  SUCCESS_MESSAGE_SCREEN,
} from '../constants/screen';

const {Navigator, Screen} = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={LOGIN_SCREEN} component={Login} />
      <Screen name={REGISTER_SCREEN} component={Register} />
      <Screen name={SUCCESS_MESSAGE_SCREEN} component={SuccessScreen} />
      <Screen name={FORGOT_PASSWORD_SCREEN} component={ForgotPassword} />
      <Screen name={RESET_PASSWORD_SCREEN} component={ResetPassword} />
      <Screen name={OTP_SCREEN} component={OTPScreen} />
    </Navigator>
  );
};

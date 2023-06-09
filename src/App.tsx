import React, {useEffect} from 'react';
// import ChangeAddressScreen from './screens/dashboard/changeAddress';
// import SupportFormScreen from './screens/dashboard/supportForm';

// import ChangeProfileScreen from './screens/dashboard/changePassword';
// import EditProfile from './screens/dashboard/editProfile';
// import SummaryWithdrawalScreen from './screens/dashboard/summaryWithdrawal';
// import CashWalletSummaryScreen from './screens/dashboard/cashWalletSummary';
// import BonusSummaryScreen from './screens/dashboard/summaryBonus';
// import LevelSummaryScreen from './screens/dashboard/summaryLevel';
// import ROISummaryScreen from './screens/dashboard/summaryROI';
// import DepositScreen from './screens/dashboard/deposit';
// import DepositSummaryScreen from './screens/dashboard/summaryDeposit';
// import DirectTeam from './screens/dashboard/directTeam';
// import StructureTeam from './screens/dashboard/structureTeam';
// import Navigator from './navigation';
// import HomeScreen from './screens/dashboard/home';
// import ProfileScreen from './screens/dashboard/profile';
// import SuccessScreen from './screens/auth/success';
// import OTPScreen from './screens/auth/otp';
// import ForgotPassword from './screens/auth/forgotpassword';
// import ResetPassword from './screens/auth/resetpassword';
// import Login from './screens/auth/login';
// import Register from './screens/auth/register';
import RNBootSplash from 'react-native-bootsplash';
import MyProvider from './context/contextProvider';
import Navigator from './navigation';

const Wrapper = () => {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 1000});
  }, []);
  return (
    // <MyProvider>
    <Navigator />
    // </MyProvider>
  );
};

export default Wrapper;

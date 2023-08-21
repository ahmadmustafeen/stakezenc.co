import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  HOME_SCREEN,
  DEPOSIT_SCREEN,
  REFERRAL_TEAM_SCREEN,
  TREE_STRUCTURE_SCREEN,
  DEPOSIT_SUMMARY_SCREEN,
  // BONUS_SUMMARY_SCREEN,
  // LEVEL_REPORT_SUMMARY_SCREEN,
  CHANGE_ADDRESS_SCREEN,
  CHANGE_PASSWORD_SCREEN,
  // CASH_WALLET_SUMMARY_SCREEN,
  // ROI_INCOME_SUMMARY_SCREEN,
  WITHDRAWAL_SUMMARY_SCREEN,
  SUPPORT_SUMMARY_SCREEN,
  PROFILE_SCREEN,
  EDIT_PROFILE_SCREEN,
  NEW_SUPPORT_SCREEN,
  WITHDRAWAL_SCREEN,
} from '../constants/screen';
import HomeScreen from '../screens/dashboard/home';
import DepositScreen from '../screens/dashboard/deposit';
import DirectTeam from '../screens/dashboard/directTeam';
import StructureTeam from '../screens/dashboard/structureTeam';
import {CustomDrawerContent} from '../components/DrawerScreen';
import DepositSummaryScreen from '../screens/dashboard/summaryDeposit';
// import BonusSummaryScreen from '../screens/dashboard/summaryBonus';
// import LevelSummaryScreen from '../screens/dashboard/summaryLevel';
// import ROISummaryScreen from '../screens/dashboard/summaryROI';
import WalletSummaryScreen from '../screens/dashboard/summaryWithdrawal';
import SupportFormScreen from '../screens/dashboard/supportForm';
import SupportSummaryScreen from '../screens/dashboard/summarySupport';
import EditProfile from '../screens/dashboard/editProfile';
import ProfileScreen from '../screens/dashboard/profile';
import ChangeAddressScreen from '../screens/dashboard/changeAddress';
import ChangePasswordScreen from '../screens/dashboard/changePassword';
// import CashWalletSummaryScreen from '../screens/dashboard/cashWalletSummary';
import WithdrawalScreen from '../screens/dashboard/withdrawalScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={HOME_SCREEN}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={DEPOSIT_SCREEN} component={DepositScreen} />
      <Drawer.Screen name={WITHDRAWAL_SCREEN} component={WithdrawalScreen} />
      <Drawer.Screen name={REFERRAL_TEAM_SCREEN} component={DirectTeam} />
      <Drawer.Screen name={TREE_STRUCTURE_SCREEN} component={StructureTeam} />
      <Drawer.Screen
        name={DEPOSIT_SUMMARY_SCREEN}
        component={DepositSummaryScreen}
      />
      {/* <Drawer.Screen
        name={BONUS_SUMMARY_SCREEN}
        component={BonusSummaryScreen}
      />
      <Drawer.Screen
        name={LEVEL_REPORT_SUMMARY_SCREEN}
        component={LevelSummaryScreen}
      />
      <Drawer.Screen
        name={ROI_INCOME_SUMMARY_SCREEN}
        component={ROISummaryScreen}
      />
      <Drawer.Screen
        name={CASH_WALLET_SUMMARY_SCREEN}
        component={CashWalletSummaryScreen}
      /> */}
      <Drawer.Screen
        name={WITHDRAWAL_SUMMARY_SCREEN}
        component={WalletSummaryScreen}
      />
      <Drawer.Screen name={NEW_SUPPORT_SCREEN} component={SupportFormScreen} />
      <Drawer.Screen
        name={SUPPORT_SUMMARY_SCREEN}
        component={SupportSummaryScreen}
      />
      <Drawer.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      <Drawer.Screen name={EDIT_PROFILE_SCREEN} component={EditProfile} />
      <Drawer.Screen
        name={CHANGE_ADDRESS_SCREEN}
        component={ChangeAddressScreen}
      />
      <Drawer.Screen
        name={CHANGE_PASSWORD_SCREEN}
        component={ChangePasswordScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

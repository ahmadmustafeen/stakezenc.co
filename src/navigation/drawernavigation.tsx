import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {CustomDrawerContent} from '../components/DrawerScreen';
import {
  BONUS_SUMMARY_SCREEN,
  CASH_WALLET_SUMMARY_SCREEN,
  DEPOSIT_SCREEN,
  DEPOSIT_SUMMARY_SCREEN,
  HOME_SCREEN,
  LEVEL_REPORT_SUMMARY_SCREEN,
  NEW_SUPPORT_SCREEN,
  REFERRAL_TEAM_SCREEN,
  ROI_INCOME_SUMMARY_SCREEN,
  SUPPORT_SUMMARY_SCREEN,
  TREE_STRUCTURE_SCREEN,
  WITHDRAWAL_SUMMARY_SCREEN,
} from '../constants/screen';
import HomeScreen from '../screens/dashboard/home';
import DepositScreen from '../screens/dashboard/deposit';
import DirectTeam from '../screens/dashboard/directTeam';
import StructureTeam from '../screens/dashboard/structureTeam';
import DepositSummaryScreen from '../screens/dashboard/summaryDeposit';
import BonusSummaryScreen from '../screens/dashboard/summaryBonus';
import LevelSummaryScreen from '../screens/dashboard/summaryLevel';
import ROISummaryScreen from '../screens/dashboard/summaryROI';
import CashWalletSummaryScreen from '../screens/dashboard/cashWalletSummary';
import WalletSummaryScreen from '../screens/dashboard/summaryWithdrawal';
import SupportFormScreen from '../screens/dashboard/supportForm';
import SupportSummaryScreen from '../screens/dashboard/summarySupport';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={HOME_SCREEN}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Drawer.Screen name={DEPOSIT_SCREEN} component={DepositScreen} />
        <Drawer.Screen name={REFERRAL_TEAM_SCREEN} component={DirectTeam} />
        <Drawer.Screen name={TREE_STRUCTURE_SCREEN} component={StructureTeam} />
        <Drawer.Screen
          name={DEPOSIT_SUMMARY_SCREEN}
          component={DepositSummaryScreen}
        />
        <Drawer.Screen
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
        />
        <Drawer.Screen
          name={WITHDRAWAL_SUMMARY_SCREEN}
          component={WalletSummaryScreen}
        />
        <Drawer.Screen
          name={NEW_SUPPORT_SCREEN}
          component={SupportFormScreen}
        />
        <Drawer.Screen
          name={SUPPORT_SUMMARY_SCREEN}
          component={SupportSummaryScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

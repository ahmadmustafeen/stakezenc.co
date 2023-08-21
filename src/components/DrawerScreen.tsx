/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {bgPrimary, lighterBackground, white} from '../constants';
import {AppText} from './AppText';
// @ts-ignore
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {
  BONUS_SUMMARY_SCREEN,
  CASH_WALLET_SUMMARY_SCREEN,
  CHANGE_ADDRESS_SCREEN,
  CHANGE_PASSWORD_SCREEN,
  DEPOSIT_SCREEN,
  DEPOSIT_SUMMARY_SCREEN,
  EDIT_PROFILE_SCREEN,
  HOME_SCREEN,
  LEVEL_REPORT_SUMMARY_SCREEN,
  NEW_SUPPORT_SCREEN,
  PROFILE_SCREEN,
  REFERRAL_TEAM_SCREEN,
  ROI_INCOME_SUMMARY_SCREEN,
  SUPPORT_SUMMARY_SCREEN,
  TREE_STRUCTURE_SCREEN,
  WITHDRAWAL_SCREEN,
  WITHDRAWAL_SUMMARY_SCREEN,
} from '../constants/screen';
import AuthContext from '../context/authContext';

const SummaryNavigation = (props: any) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navigationItemContainer}
        onPress={() => setIsOpened(opened => !opened)}>
        <AppText white bold text>
          Summary
        </AppText>
        <AntDesignIcon
          name={isOpened ? 'arrowup' : 'arrowdown'}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isOpened ? (
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(DEPOSIT_SUMMARY_SCREEN)}>
            <AppText white bold text>
              Deposit Summary
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(BONUS_SUMMARY_SCREEN)}>
            <AppText white bold text>
              Bonuses
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() =>
              props.navigation.navigate(LEVEL_REPORT_SUMMARY_SCREEN)
            }>
            <AppText white bold text>
              Level Report
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() =>
              props.navigation.navigate(ROI_INCOME_SUMMARY_SCREEN)
            }>
            <AppText white bold text>
              ROI Income
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() =>
              props.navigation.navigate(CASH_WALLET_SUMMARY_SCREEN)
            }>
            <AppText white bold text>
              Cash Wallet
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() =>
              props.navigation.navigate(WITHDRAWAL_SUMMARY_SCREEN)
            }>
            <AppText white bold text>
              Withdrawals
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

const SupportNavigation = (props: any) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navigationItemContainer}
        onPress={() => setIsOpened(opened => !opened)}>
        <AppText white bold text>
          Support
        </AppText>
        <AntDesignIcon
          name={isOpened ? 'arrowup' : 'arrowdown'}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isOpened ? (
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(NEW_SUPPORT_SCREEN)}>
            <AppText white bold text>
              Submit Ticket
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(SUPPORT_SUMMARY_SCREEN)}>
            <AppText white bold text>
              Summary
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

const NetworkNavigation = (props: any) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navigationItemContainer}
        onPress={() => setIsOpened(opened => !opened)}>
        <AppText white bold text>
          Network
        </AppText>
        <AntDesignIcon
          name={isOpened ? 'arrowup' : 'arrowdown'}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isOpened ? (
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(REFERRAL_TEAM_SCREEN)}>
            <AppText white bold text>
              Referral Team
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(TREE_STRUCTURE_SCREEN)}>
            <AppText white bold text>
              Tree Structure
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};
const ProfileNavigation = (props: any) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navigationItemContainer}
        onPress={() => setIsOpened(opened => !opened)}>
        <AppText white bold text>
          Profile
        </AppText>
        <AntDesignIcon
          name={isOpened ? 'arrowup' : 'arrowdown'}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isOpened ? (
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(PROFILE_SCREEN)}>
            <AppText white bold text>
              View Profile
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(EDIT_PROFILE_SCREEN)}>
            <AppText white bold text>
              Edit Profile
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(CHANGE_PASSWORD_SCREEN)}>
            <AppText white bold text>
              Change Password
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigationItemContainer}
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate(CHANGE_ADDRESS_SCREEN)}>
            <AppText white bold text>
              Change Address
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export const CustomDrawerContent = (props: any) => {
  const {data, setContextData} = useContext(AuthContext);
  const logout = () => {
    setContextData({isLoggedIn: false, user: null, apiLoader: false});
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <ScrollView style={styles.navigationContainer}>
        <ProfileNavigation {...props} />

        <TouchableOpacity
          style={styles.navigationItemContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(HOME_SCREEN)}>
          <AppText white bold text>
            Dashboard
          </AppText>
          <AntDesignIcon name="arrowright" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationItemContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(WITHDRAWAL_SCREEN)}>
          <AppText white bold text>
            Withdrawals
          </AppText>
          <AntDesignIcon name="arrowright" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationItemContainer}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(DEPOSIT_SCREEN)}>
          <AppText white bold text>
            Deposit
          </AppText>
          <AntDesignIcon name="arrowright" style={styles.icon} />
        </TouchableOpacity>

        <NetworkNavigation {...props} />
        <SummaryNavigation {...props} />
        <SupportNavigation {...props} />

        <TouchableOpacity
          style={styles.navigationItemContainer}
          onPress={logout}>
          <AppText white bold text>
            Logout
          </AppText>
          <AntDesignIcon name="logout" style={styles.icon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: bgPrimary,
  },
  logoContainer: {
    width: '100%',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  navigationItemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: lighterBackground,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'flex-end',
  },
  navigationContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    color: white,
    fontSize: 18,
  },
});

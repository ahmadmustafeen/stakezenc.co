/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {bgPrimary, lighterBackground, white} from '../constants';
import {AppText} from './AppText';
// @ts-ignore
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {DEPOSIT_SCREEN, HOME_SCREEN} from '../constants/screen';

const SummaryNavigation = () => {
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
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Deposit Summary
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Bonuses
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Level Report
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              ROI Income
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Cash Wallet
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Withdrawals
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
        </View>
      ) : null}
    </>
  );
};

const SupportNavigation = () => {
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
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Submit Ticket
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Summary
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
        </View>
      ) : null}
    </>
  );
};

const NetworkNavigation = () => {
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
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Referral Team
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
          <View style={styles.navigationItemContainer}>
            <AppText white bold text>
              Tree Structure
            </AppText>
            <AntDesignIcon name="arrowright" style={styles.icon} />
          </View>
        </View>
      ) : null}
    </>
  );
};

export const CustomDrawerContent = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.navigationContainer}>
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
          onPress={() => props.navigation.navigate(HOME_SCREEN)}>
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

        <NetworkNavigation />
        <SummaryNavigation />
        <SupportNavigation />

        <View style={styles.navigationItemContainer}>
          <AppText white bold text>
            Logout
          </AppText>
          <AntDesignIcon name="logout" style={styles.icon} />
        </View>
      </View>
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

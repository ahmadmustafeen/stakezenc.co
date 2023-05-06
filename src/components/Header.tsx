/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {primaryBlue, headerBlue, white} from '../constants';
import {AppButton} from './AppButton';
// @ts-ignore
import EntypoIcon from 'react-native-vector-icons/Entypo';
// @ts-ignore
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {DEPOSIT_SCREEN, PROFILE_SCREEN} from '../constants/screen';

const Header = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuIconContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.openDrawer()}
          style={[styles.iconContainer, {backgroundColor: '#4d0d74'}]}>
          <EntypoIcon name="menu" style={[styles.menuIcon, {color: white}]} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addFundsContainer}
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate(DEPOSIT_SCREEN)}>
        <AppButton
          label="add funds"
          uppercase
          onPress={() => props.navigation.navigate(DEPOSIT_SCREEN)}
          containerStyle={styles.customAddFundsContainer}
          text
          bgColor={headerBlue}
          smallText={false}
        />
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => props.navigation.navigate(PROFILE_SCREEN)}>
          <FontAwesomeIcon name="user-o" style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    backgroundColor: primaryBlue,
    flexDirection: 'row',
  },
  menuIconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 22,
  },
  customAddFundsContainer: {
    borderRadius: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 100,
  },
  smallIconContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    height: 30,
  },
  addFundsContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: '30%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
});

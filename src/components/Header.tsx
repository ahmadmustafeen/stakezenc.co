/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {primaryBlue, headerBlue, white} from '../constants';
import {AppButton} from './AppButton';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuIconContainer}>
        <TouchableOpacity
          style={[styles.iconContainer, {backgroundColor: '#4d0d74'}]}>
          <EntypoIcon name="menu" style={[styles.menuIcon, {color: white}]} />
        </TouchableOpacity>
      </View>
      <View style={styles.addFundsContainer}>
        <AppButton
          label="add funds"
          uppercase
          containerStyle={styles.customAddFundsContainer}
          text
          bgColor={headerBlue}
          smallText={false}
        />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.smallIconContainer}>
          <FontAwesomeIcon
            name="bell-o"
            style={[styles.menuIcon, {color: white}]}
          />
        </View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon name="user-o" style={styles.menuIcon} />
        </View>
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

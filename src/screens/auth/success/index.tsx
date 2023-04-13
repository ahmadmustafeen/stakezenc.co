/* eslint-disable react-native/no-inline-styles */

import {ScrollView, View} from 'react-native';
import React from 'react';
import {AppHeader, AppButton, AppText} from '../../../components';
import {styles} from './style';

const SuccessScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        width: '100%',
        flex: 1,
      }}>
      <View style={styles.contentContainer}>
        <AppHeader title="Password Updated Successfully" />
        <View style={styles.textContainer}>
          <AppText white text semibold center>
            You can now login with your new password!
          </AppText>
        </View>
        <View style={{paddingVertical: 15}}>
          <AppButton label="Back to Login" uppercase />
        </View>
      </View>
    </ScrollView>
  );
};

export default SuccessScreen;

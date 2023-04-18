/* eslint-disable react-native/no-inline-styles */

import {ScrollView, View} from 'react-native';
import React from 'react';
import {AppHeader, AppButton, AppText} from '../../../components';
import {styles} from './style';
import {LOGIN_SCREEN} from '../../../constants/screen';

const SuccessScreen = (props: any) => {
  const {navigation} = props;
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
          <AppButton
            label="Back to Login"
            uppercase
            onPress={() => navigation.navigate(LOGIN_SCREEN)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SuccessScreen;

import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppButton, AppText, Header} from '../../../components';
import AppInput from '../../../components/AppInput';

const ChangePasswordScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.formContainer}>
        <View style={styles.labelContainer}>
          <AppText children="Current Password" white text />
        </View>
        <AppInput placeholder="Current Password" />
        <View style={styles.labelContainer}>
          <AppText children="New Password" white text />
        </View>
        <AppInput placeholder="New Password" />
        <View style={styles.labelContainer}>
          <AppText children="Re-Enter New Password" white text />
        </View>
        <AppInput placeholder="Re-Enter New Password" />

        <AppButton
          label="Confirm"
          width={'90%'}
          uppercase
          containerStyle={styles.appButton}
        />
      </ScrollView>
    </View>
  );
};

export default ChangePasswordScreen;

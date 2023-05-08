import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppButton, AppText, Header} from '../../../components';
import AppInput from '../../../components/AppInput';

const EditProfile = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.formContainer}>
        <View style={styles.labelContainer}>
          <AppText children="Full Name" white text />
        </View>
        <AppInput placeholder="Enter Full Name" />
        <View style={styles.labelContainer}>
          <AppText children="Address" white text />
        </View>
        <AppInput placeholder="Street" />
        <AppInput placeholder="City" />
        <AppInput placeholder="Postal Code" />
        <View style={styles.labelContainer}>
          <AppText children="Phone" white text />
        </View>
        <AppInput placeholder="phone" />
        <View style={styles.labelContainer}>
          <AppText children="Country" white text />
        </View>
        <AppInput placeholder="country" />

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

export default EditProfile;

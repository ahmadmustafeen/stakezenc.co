import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppButton, AppText, Header} from '../../../components';
import AppInput from '../../../components/AppInput';

const ChangeAddressScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.formContainer}>
        <View style={styles.labelContainer}>
          <AppText children="ZENC (BEP20) Address" white text />
        </View>
        <AppInput placeholder="Enter Wallet Address" />

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

export default ChangeAddressScreen;

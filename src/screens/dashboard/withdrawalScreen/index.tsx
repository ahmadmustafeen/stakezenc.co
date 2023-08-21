import React from 'react';
import {ScrollView, View} from 'react-native';
import {AppButton, AppText, Header} from '../../../components';
import {styles} from './style';
import AppInput from '../../../components/AppInput';

const WithdrawalScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={{marginTop: 20, paddingTop: 20}}>
        <View style={[styles.infoContainer, {paddingTop: 10}]}>
          <View style={[styles.verticalPadding, styles.additionalText]}>
            <AppText
              children="To Request Your Withdrawal, Please fill the following form."
              white
              text
            />
          </View>

          <View style={styles.labelContainer}>
            <AppText children="Available Balance" white smallText />
          </View>
          <AppInput value={'122'} editable={false} />

          <View style={[styles.labelContainer, {flexDirection: 'row'}]}>
            <AppText children="Desired Amount" white smallText />
          </View>
          <AppInput placeholder="Enter Amount" />

          <View style={[styles.labelContainer, {flexDirection: 'row'}]}>
            <AppText children="Recieved Amount" white smallText />
            <View style={{marginLeft: 10}}>
              <AppText children="5% Tax" smallText customColor="red" />
            </View>
          </View>
          <AppInput placeholder="Enter Amount" />

          <View
            style={{alignSelf: 'center', width: '90%', paddingVertical: 10}}>
            <AppText
              children="Your address is not set, please set that first from here"
              white
              underline
              text
            />
          </View>

          <AppButton
            isDisabled
            label="Submit now"
            width={'90%'}
            uppercase
            containerStyle={styles.appButton}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WithdrawalScreen;

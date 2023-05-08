import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import {AppButton, AppText, Header} from '../../../components';
import {styles} from './style';
import AppInput from '../../../components/AppInput';

const DepositScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.depositContainer}>
          <AppText
            largerHeading
            bold
            center
            children="(Deposit Bep20 ZENC COIN)"
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoTabContainer}>
            <View style={styles.alignLeftContainer}>
              <AppText bold text children="To" white />
              <AppText bold text children="Zenccoin" white />
            </View>
            <View style={styles.alignRightContainer}>
              <AppText bold text children="Date" white right />
              <AppText bold text children="2023-05-05" white right />
            </View>
          </View>
          <View style={styles.verticalPadding}>
            <AppText
              children="Please send your payment to the following address"
              white
              center
              text
            />
          </View>
          <View style={styles.qrContainer}>
            <Image
              source={require('../../../assets/images/qr.png')}
              style={styles.qrContainer}
            />
          </View>
          <View style={styles.verticalPadding}>
            <AppText children="Address" white heading center bold />
            <View style={styles.addressContainer}>
              <AppText
                children="0x585235d4A1aDbFEdD6Ceb4a748a9A513f0B41CC1"
                white
                text
                bold
                center
              />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <AppText children="Screenshot" white text bold />
            <AppText
              children="(Only jpg and png files are allowed)"
              pink
              text
              bold
            />
          </View>
          <View style={[styles.verticalPadding, styles.additionalText]}>
            <AppText
              children="*Pay Exact Amount And Enter Transaction Id Here"
              white
              text
            />
          </View>
          <AppInput placeholder="Enter Transaction ID" />
          <AppInput placeholder="Enter Amount" />

          <AppButton
            label="Make Payment as sent"
            width={'90%'}
            uppercase
            containerStyle={styles.appButton}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DepositScreen;

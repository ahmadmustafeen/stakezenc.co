/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';

const ProfileScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />

      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/user-profile.png')}
              style={styles.image}
            />
          </View>
          <AppText children="Ahmad Mustafeen" center white heading />
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <AppText white>Account status</AppText>
              <View
                style={[styles.statusContainer, {backgroundColor: '#f6c23e'}]}>
                <AppText white>Pending</AppText>
              </View>
            </View>
            <View style={styles.info}>
              <AppText white>KYC status</AppText>
              <View
                style={[styles.statusContainer, {backgroundColor: '#e74a3b'}]}>
                <AppText white>Unverified</AppText>
              </View>
            </View>

            <View style={styles.info}>
              <AppText white>Account status</AppText>
              <View
                style={[styles.statusContainer, {backgroundColor: '#36b9cc'}]}>
                <AppText white>No Package</AppText>
              </View>
            </View>
            <View style={styles.info}>
              <AppText white>Account status</AppText>
              <AppText text secondary>
                $ 0
              </AppText>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

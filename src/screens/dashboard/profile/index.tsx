import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import {bgPrimary, lighterBackground, primaryBlue} from '../../../constants';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <View style={styles.profileContainer}>
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/user-profile.png')}
              style={{
                width: 100,
                height: 100,
                borderWidth: 2,
                borderRadius: 100,
                borderColor: primaryBlue,
              }}
            />
          </View>
          <AppText children="Ahmad Mustafeen" center white heading />
          <View
            style={{
              marginVertical: 10,
              width: '90%',
              alignSelf: 'center',
              paddingVertical: 20,
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                backgroundColor: lighterBackground,
                marginVertical: 1,
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AppText white>Account status</AppText>
              <View
                style={{padding: 5, borderRadius: 5, backgroundColor: 'red'}}>
                <AppText white>Account status</AppText>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                backgroundColor: lighterBackground,
                marginVertical: 1,
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AppText white>Account status</AppText>
              <View
                style={{padding: 5, borderRadius: 5, backgroundColor: 'red'}}>
                <AppText white>Account status</AppText>
              </View>
            </View>

            <View
              style={{
                paddingHorizontal: 10,
                backgroundColor: lighterBackground,
                marginVertical: 1,
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AppText white>Account status</AppText>
              <View
                style={{padding: 5, borderRadius: 5, backgroundColor: 'red'}}>
                <AppText white>Account status</AppText>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: lighterBackground,
                marginVertical: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AppText white>Account status</AppText>
              <AppText text white>
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

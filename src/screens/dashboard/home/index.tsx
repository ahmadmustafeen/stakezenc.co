/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import {AppText, Header} from '../../../components';
import {InfoGraphicContainer} from '../../../components/InfoGraphicContainer';
import {styles} from './style';

const HomeScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={{paddingBottom: 20}}>
        <View style={styles.introContainer}>
          <AppText white largerHeading>
            Welcome Ahmad Mustafeen
          </AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText white text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Personal Area'}
          </AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText white text>
            Server
          </AppText>
          <AppText secondary text>
            {' / 24-04-2023 07:12 am'}
          </AppText>
        </View>

        <InfoGraphicContainer value="100.00" heading="Current Coins" />
        <InfoGraphicContainer value="100.00" heading="Total Coins" />
        <InfoGraphicContainer value="100.00" heading="Coin Today" />
        <InfoGraphicContainer value="100.00" heading="Withdrawal Token" />
        <InfoGraphicContainer value="100.00" heading="Direct Bonus" />
        <InfoGraphicContainer value="100.00" heading="Level Bonus" />
        <InfoGraphicContainer value="100.00" heading="Team Sales" />
        <InfoGraphicContainer value="100.00" heading="Direct Sales" />
        <InfoGraphicContainer value="100.00" heading="Coin on Staking" />
        <InfoGraphicContainer value="100.00" heading="Coin this month" />
        <InfoGraphicContainer value="100.00" heading="Coin total" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

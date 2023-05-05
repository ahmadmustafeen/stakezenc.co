import {ScrollView, View} from 'react-native';
import React from 'react';
import {AppText, Header} from '../../../components';
import {InfoGraphicContainer} from '../../../components/InfoGraphicContainer';
import {styles} from './style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
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
        <InfoGraphicContainer value="100.00" heading="Current Coins" />
        <InfoGraphicContainer value="100.00" heading="Current Coins" />
        <InfoGraphicContainer value="100.00" heading="Current Coins" />
        <InfoGraphicContainer value="100.00" heading="Current Coins" />
        <InfoGraphicContainer value="100.00" heading="Current Coins" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import LevelComponent from '../../../components/LevelComponent';

const LevelSummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.headingContainer}>
          <AppText children="Level Summary" largerHeading white />
        </View>
        <View style={styles.infoContainer}>
          <AppText secondary text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Level Summary'}
          </AppText>
        </View>
        <LevelComponent
          serialNumber="1"
          sales="2"
          bonus="20"
          status="CONFIRMED"
        />
        <LevelComponent
          serialNumber="2"
          sales="2"
          bonus="20"
          status="CONFIRMED"
        />
      </ScrollView>
    </View>
  );
};

export default LevelSummaryScreen;

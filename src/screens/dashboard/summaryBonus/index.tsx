import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import BonusComponent from '../../../components/BonusComponent';

const BonusSummaryScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.headingContainer}>
          <AppText children="Bonus Summary" largerHeading white />
        </View>
        <View style={styles.infoContainer}>
          <AppText secondary text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Bonus Summary'}
          </AppText>
        </View>
        <BonusComponent
          serialNumber="1"
          from="Tahir"
          bonusAmount="20"
          level="2"
          status="RECIEVED"
          date="23-04-2022"
        />
        <BonusComponent
          serialNumber="2"
          from="Hawk"
          bonusAmount="20"
          level="2"
          status="RECIEVED"
          date="23-04-2022"
        />
      </ScrollView>
    </View>
  );
};

export default BonusSummaryScreen;

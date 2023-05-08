import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import ROIComponent from '../../../components/ROIComponent';

const ROISummaryScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.headingContainer}>
          <AppText children="ROI Wallet Summary" largerHeading white />
        </View>
        <View style={styles.infoContainer}>
          <AppText secondary text>
            Home
          </AppText>
          <AppText secondary text>
            {' / ROI Wallet Summary'}
          </AppText>
        </View>
        <ROIComponent
          serialNumber="1"
          amount="2"
          percentage="20%"
          status="CONFIRMED"
          date="20-02-2022"
        />
        <ROIComponent
          serialNumber="1"
          amount="2"
          percentage="20%"
          status="CONFIRMED"
          date="20-02-2022"
        />
      </ScrollView>
    </View>
  );
};

export default ROISummaryScreen;

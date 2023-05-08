import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import SupportComponent from '../../../components/SupportComponent';

const SupportSummaryScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.headingContainer}>
          <AppText children="Support Summary" largerHeading white />
        </View>
        <View style={styles.infoContainer}>
          <AppText secondary text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Support Summary'}
          </AppText>
        </View>
        <SupportComponent
          serialNumber="1"
          subject="Subject"
          message="This is the message"
          reply="This is the reply"
          status="COMPLETED"
          date="20-02-21"
        />
      </ScrollView>
    </View>
  );
};

export default SupportSummaryScreen;

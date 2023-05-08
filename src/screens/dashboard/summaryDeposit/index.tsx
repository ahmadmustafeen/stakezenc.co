import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import DepositComponent from '../../../components/DepositComponent';

const DepositSummaryScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.headingContainer}>
          <AppText children="Deposit Summary" largerHeading white />
        </View>
        <View style={styles.infoContainer}>
          <AppText secondary text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Deposit Summary'}
          </AppText>
        </View>
        <DepositComponent
          serialNumber="1"
          amount="100"
          mode="ONLINE"
          screenShot=""
          transactionId="12312123121"
          status="PAID"
          roiStatus="VALID"
          rioRecieved="221"
          date="23-04-2022"
        />
        <DepositComponent
          serialNumber="1"
          amount="100"
          mode="ONLINE"
          screenShot=""
          transactionId="12312123121"
          status="PAID"
          roiStatus="VALID"
          rioRecieved="221"
          date="23-04-2022"
        />
      </ScrollView>
    </View>
  );
};

export default DepositSummaryScreen;

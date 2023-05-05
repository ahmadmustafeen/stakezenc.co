import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import WithdrawalComponent from '../../../components/WithdrawalComponent';

const DepositSummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.headingContainer}>
          <AppText children="Withdrawal Summary" largerHeading white />
        </View>
        <View style={styles.infoContainer}>
          <AppText secondary text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Withdrawal Summary'}
          </AppText>
        </View>
        <WithdrawalComponent
          serialNumber="1"
          amount="100"
          fee="100"
          afterFee="120"
          mode="ONLINE"
          wallet="12312321312"
          status="SUCCESSFUL"
          rejectionReason="N/A"
          date="23-04-2022"
        />
        <WithdrawalComponent
          serialNumber="2"
          amount="100"
          fee="100"
          afterFee="120"
          mode="ONLINE"
          wallet="12312321312"
          status="SUCCESSFUL"
          rejectionReason="N/A"
          date="23-04-2022"
        />
      </ScrollView>
    </View>
  );
};

export default DepositSummaryScreen;

import {ScrollView, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import CashWalletComponent from '../../../components/CashWalletComponent';

const CashWalletSummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.headingContainer}>
          <AppText children="Cash Wallet Summary" largerHeading white />
        </View>
        <View style={styles.infoContainer}>
          <AppText secondary text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Cash Wallet Summary'}
          </AppText>
        </View>
        <CashWalletComponent
          serialNumber="1"
          amount="100"
          description="Signup Balance"
          type="CREDIT"
          balance="100"
          date="20-02-2022"
        />
      </ScrollView>
    </View>
  );
};

export default CashWalletSummaryScreen;

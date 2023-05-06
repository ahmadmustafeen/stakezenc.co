import {StyleSheet, View} from 'react-native';
import React from 'react';
import {darkerPrimary} from '../constants';
import {AppText} from './AppText';

interface DepositComponentProps {
  serialNumber: string;
  amount: string;
  mode: string;
  screenShot: string;
  transactionId: string;
  status: string;
  roiStatus: string;
  rioRecieved: string;
  date: string;
}

const DepositComponent = (props: DepositComponentProps) => {
  const {
    serialNumber,
    amount,
    mode,
    // screenShot,
    transactionId,
    status,
    roiStatus,
    rioRecieved,
    date,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AppText children="Serial Number" white left />
        <AppText children={serialNumber} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Amount" white left />
        <AppText children={amount} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Mode" white left />
        <AppText children={mode} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Transaction Id" white left />
        <AppText children={transactionId} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Status" white left />
        <AppText children={status} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="ROI Status" white left />
        <AppText children={roiStatus} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="ROI Received" white left />
        <AppText children={rioRecieved} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Date" white left />
        <AppText children={date} white right />
      </View>
    </View>
  );
};

export default DepositComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkerPrimary,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 30,
    marginVertical: 10,
  },
  infoContainer: {
    marginVertical: 5,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {darkerPrimary} from '../constants';
import {AppText} from './AppText';

interface WithdrawalComponentProps {
  serialNumber: string;
  amount: string;
  fee: string;
  afterFee: string;
  mode: string;
  wallet: string;
  status: string;
  rejectionReason: string;
  date: string;
}

const WithdrawalComponent = (props: WithdrawalComponentProps) => {
  const {
    serialNumber,
    amount,
    fee,
    afterFee,
    mode,
    wallet,
    status,
    rejectionReason,
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
        <AppText children="Fee" white left />
        <AppText children={fee} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="After Fee" white left />
        <AppText children={afterFee} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Mode" white left />
        <AppText children={mode} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Wallet" white left />
        <AppText children={wallet} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Status" white left />
        <AppText children={status} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Rejection Reason" white left />
        <AppText children={rejectionReason} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Date" white left />
        <AppText children={date} white right />
      </View>
    </View>
  );
};

export default WithdrawalComponent;

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

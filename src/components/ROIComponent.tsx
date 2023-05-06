import {StyleSheet, View} from 'react-native';
import React from 'react';
import {darkerPrimary} from '../constants';
import {AppText} from './AppText';

interface ROIComponentProps {
  serialNumber: string;
  amount: string;
  percentage: string;
  status: string;
  date: string;
}

const ROIComponent = (props: ROIComponentProps) => {
  const {serialNumber, amount, percentage, status, date} = props;

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
        <AppText children="Percentage" white left />
        <AppText children={percentage} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Status" white left />
        <AppText children={status} white right />
      </View>

      <View style={styles.infoContainer}>
        <AppText children="Date" white left />
        <AppText children={date} white right />
      </View>
    </View>
  );
};

export default ROIComponent;

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

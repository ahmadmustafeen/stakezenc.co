import {StyleSheet, View} from 'react-native';
import React from 'react';
import {darkerPrimary} from '../constants';
import {AppText} from './AppText';

interface BonusComponentProps {
  serialNumber: string;
  from: string;
  bonusAmount: string;
  level: string;
  status: string;
  date: string;
}

const BonusComponent = (props: BonusComponentProps) => {
  const {serialNumber, from, bonusAmount, level, status, date} = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AppText children="Serial Number" white left />
        <AppText children={serialNumber} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="From" white left />
        <AppText children={from} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Bonus Amount" white left />
        <AppText children={bonusAmount} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Level" white left />
        <AppText children={level} white right />
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

export default BonusComponent;

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

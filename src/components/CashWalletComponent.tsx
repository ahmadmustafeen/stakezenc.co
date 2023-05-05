import {StyleSheet, View} from 'react-native';
import React from 'react';
import {darkerPrimary} from '../constants';
import {AppText} from './AppText';

interface BonusComponentProps {
  serialNumber: string;
  amount: string;
  description: string;
  type: string;
  balance: string;
  date: string;
}

const BonusComponent = (props: BonusComponentProps) => {
  const {serialNumber, amount, description, type, balance, date} = props;

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
        <AppText children="Description" white left />
        <AppText children={description} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Type" white left />
        <View style={type === 'CREDIT' ? styles.confirmed : styles.rejected}>
          <AppText children={type} white right />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Balance" white left />
        <AppText children={balance} white right />
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

  confirmed: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  rejected: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

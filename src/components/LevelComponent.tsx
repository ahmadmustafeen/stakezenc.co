import {StyleSheet, View} from 'react-native';
import React from 'react';
import {darkerPrimary} from '../constants';
import {AppText} from './AppText';

interface LevelComponentProps {
  serialNumber: string;
  sales: string;
  bonus: string;
  status: string;
}

const LevelComponent = (props: LevelComponentProps) => {
  const {serialNumber, sales, bonus, status} = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AppText children="Serial Number" white left />
        <AppText children={serialNumber} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Sales" white left />
        <AppText children={sales} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Bonus" white left />
        <AppText children={bonus} white right />
      </View>

      <View style={styles.infoContainer}>
        <AppText children="Status" white left />
        <View
          style={status === 'CONFIRMED' ? styles.confirmed : styles.rejected}>
          <AppText children={status} white right />
        </View>
      </View>
    </View>
  );
};

export default LevelComponent;

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

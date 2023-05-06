import {StyleSheet, View} from 'react-native';
import React from 'react';
import {darkerPrimary} from '../constants';
import {AppText} from './AppText';

interface SupportComponentProps {
  serialNumber: string;
  subject: string;
  message: string;
  reply: string;
  status: string;
  date: string;
}

const SupportComponent = (props: SupportComponentProps) => {
  const {serialNumber, subject, message, reply, status, date} = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AppText children="Serial Number" white left />
        <AppText children={serialNumber} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Subject" white left />
        <AppText children={subject} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Message" white left />
        <AppText children={message} white right />
      </View>
      <View style={styles.infoContainer}>
        <AppText children="Reply" white left />
        <AppText children={reply} white right />
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

export default SupportComponent;

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

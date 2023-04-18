import {StyleSheet, View} from 'react-native';
import {primaryBlue} from '../constants';
import React from 'react';
import {AlertPromptProps} from '../types';
import {AppButton} from './AppButton';
import {AppText} from './AppText';

export const AlertPrompt = (props: AlertPromptProps) => {
  const {isVisible, onPressRetry, title, message} = props;

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <AppText center text bold white>
            {title}
          </AppText>
        </View>
        <View style={styles.messageContainer}>
          <AppText center text white>
            {message}
          </AppText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton label="Retry" transparent onPress={onPressRetry} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  innerContainer: {
    backgroundColor: primaryBlue,
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  titleContainer: {
    backgroundColor: 'rgba(220,220,220,0.2)',
    paddingVertical: 15,
  },
  messageContainer: {
    paddingVertical: 15,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
});

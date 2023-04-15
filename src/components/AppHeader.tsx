import {StyleSheet, View} from 'react-native';
import React from 'react';
import {white} from '../constants';
import {AppText} from './AppText';
import {AppHeaderProps} from '../types';

const AppHeader = (props: AppHeaderProps) => {
  const {title, containerStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText largerHeading white center bold>
        {title}
      </AppText>
    </View>
  );
};

export {AppHeader};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '100%',
  },
  heading: {
    fontSize: 44,
    color: white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

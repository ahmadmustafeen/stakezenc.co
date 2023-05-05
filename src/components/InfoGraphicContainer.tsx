import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {AppText} from './AppText';

import {darkerPrimary} from '../constants';

interface InfoGraphicContainerProps {
  heading: string;
  value: string;
}

export const InfoGraphicContainer = (props: InfoGraphicContainerProps) => {
  const {heading, value} = props;

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <AppText white bold text center>
          {heading}
        </AppText>
        <AppText white bold text center>
          {value}
        </AppText>
      </View>
      <View style={style.innerContainer}>
        <Image
          source={require('../assets/images/chart.png')}
          style={style.image}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: 'solid',
    width: '90%',
    paddingVertical: 30,
    alignSelf: 'center',
    backgroundColor: darkerPrimary,
    flexDirection: 'row',
  },
  innerContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

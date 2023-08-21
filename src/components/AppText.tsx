/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {pinkColor, primaryBlue, primaryText} from '../constants';
import {AppTextProps} from '../types';

const AppText = (props: AppTextProps) => {
  const {
    children,
    white = false,
    black = true,
    text,
    pink,
    heading,
    largerHeading,
    smallText,
    primary,
    right,
    customColor,
    left,
    uppercase,
    secondary,
    underline,
    bold = false,
    semibold = false,
    center,
  } = props;
  return (
    <View style={[styles.container]}>
      <Text
        style={[
          styles.text,
          black && {color: 'black'},
          white && {color: 'white'},
          primary && {color: primaryBlue},
          pink && {color: pinkColor},
          secondary && {color: primaryText},
          largerHeading && {fontSize: 32},
          heading && {fontSize: 24},
          text && {fontSize: 16},
          smallText && {fontSize: 14},
          underline && {textDecorationLine: 'underline'},
          bold && {fontWeight: 'bold'},
          semibold && {fontWeight: '600'},
          center && {textAlign: 'center'},
          right && {textAlign: 'right'},
          left && {textAlign: 'left'},
          uppercase && {textTransform: 'uppercase'},
          customColor && {color: customColor},
        ]}>
        {children}
      </Text>
    </View>
  );
};

export {AppText};

const styles = StyleSheet.create({
  container: {},
  text: {},
});

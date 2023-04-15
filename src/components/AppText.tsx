/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {primaryBlue, primaryText} from '../constants';
import {AppTextProps} from '../types';

const AppText = (props: AppTextProps) => {
  const {
    children,
    white = false,
    black = true,
    text,
    heading,
    largerHeading,
    smallText,
    primary,
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
          secondary && {color: primaryText},
          largerHeading && {fontSize: 32},
          heading && {fontSize: 24},
          text && {fontSize: 16},
          smallText && {fontSize: 14},
          underline && {textDecorationLine: 'underline'},
          bold && {fontWeight: 'bold'},
          semibold && {fontWeight: '600'},
          center && {textAlign: 'center'},
          uppercase && {textTransform: 'uppercase'},
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

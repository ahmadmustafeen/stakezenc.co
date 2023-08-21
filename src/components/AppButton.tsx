/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppText} from '../components';
import {primaryBlue} from '../constants';
import {AppButtonProps} from '../types';

const AppButton = (props: AppButtonProps) => {
  const {
    label,
    transparent,
    onPress,
    uppercase,
    bgColor,
    width,
    smallText = true,
    isDisabled = false,
    text,
    heading,
    loader = false,
    containerStyle,
  } = props;
  return (
    <TouchableOpacity
      disabled={!!loader || isDisabled}
      onPress={onPress}
      style={[
        styles.container,
        !!bgColor && {backgroundColor: bgColor, borderColor: bgColor},
        transparent && {borderColor: 'white', backgroundColor: 'transparent'},
        !!width && {width: width},
        containerStyle,
      ]}>
      <AppText
        white
        center
        bold
        smallText={smallText}
        text={text}
        heading={heading}
        uppercase={uppercase}>
        {loader ? 'Wait' : label}
      </AppText>
    </TouchableOpacity>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: primaryBlue,
    borderColor: primaryBlue,
    borderRadius: 20,
    alignSelf: 'center',
    width: 130,
    paddingVertical: 8,
  },
});

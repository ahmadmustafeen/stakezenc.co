/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppText} from '../components';
import {primaryBlue} from '../constants';
interface AppButtonProps {
  label: string;
  transparent?: boolean;
  onPress?: () => void;
  uppercase?: boolean;
}
const AppButton = (props: AppButtonProps) => {
  const {label, transparent, onPress, uppercase} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        transparent && {borderColor: 'white', backgroundColor: 'transparent'},
      ]}>
      <AppText white center bold smallText uppercase={uppercase}>
        {label}
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

/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppText} from '../components';
import {primaryBlue} from '../constants';
interface AppButtonProps {
  label: string;
  transparent?: boolean;
}
const AppButton = (props: AppButtonProps) => {
  const {label, transparent} = props;
  return (
    <View
      style={[
        styles.container,
        transparent && {borderColor: 'white', backgroundColor: 'transparent'},
      ]}>
      <AppText white center bold smallText>
        {label}
      </AppText>
    </View>
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

import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {lighterBackground} from '../constants';

interface AppInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: () => void;
}

const AppInput = (props: AppInputProps) => {
  const {onChangeText, value, placeholder} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'white'}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    backgroundColor: lighterBackground,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

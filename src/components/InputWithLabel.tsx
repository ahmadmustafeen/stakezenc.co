/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

interface InputWithLabelProps {
  autoFocus?: boolean;
  value?: string;
  onChangeText?: (e: string) => void;
  secureTextEntry?: boolean;
  textAlignVertical?: 'center' | 'auto' | 'top' | 'bottom' | undefined;
  onSubmitEditing?: () => void;
  placeholder?: string;
  isNumber?: boolean;
  multiline?: boolean;
  inputStyle?: TextInputProps;
  readOnly?: boolean;
}

const InputWithLabel = (props: InputWithLabelProps) => {
  const {
    autoFocus,
    value,
    onChangeText,
    secureTextEntry,
    textAlignVertical,
    onSubmitEditing,
    placeholder,
    isNumber,
    multiline,
    inputStyle,
    readOnly,
  } = props;

  const [visible, setVisible] = React.useState(secureTextEntry);
  const [focus, setFocus] = React.useState(false);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[{width: '90%'}]}>
        <TextInput
          editable={!readOnly}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          multiline={multiline}
          keyboardType={isNumber ? 'number-pad' : 'default'}
          textAlignVertical={textAlignVertical || 'top'}
          secureTextEntry={visible}
          onSubmitEditing={onSubmitEditing}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          value={value}
          style={[
            {
              width: '100%',
              height: 45,
              paddingTop: 12,
              borderRadius: 100,
              backgroundColor: 'white',
              paddingHorizontal: 15,
            },
            focus && autoFocus && {shadowColor: '#0098FA'},
            secureTextEntry && {paddingRight: 35},
            inputStyle,
          ]}
          placeholder={placeholder || 'xyz@gmail.com'}
        />
      </View>
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export {InputWithLabel};

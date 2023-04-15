import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface AppButtonProps {
  label: string;
  transparent?: boolean;
  onPress?: () => void;
  uppercase?: boolean;
  width?: string | number | undefined;
}
export interface AppHeaderProps {
  title: string;
  containerStyle?: ViewStyle;
  headingStyle?: TextStyle;
}

export interface AppTextProps {
  children: string;
  white?: boolean;
  black?: boolean;
  text?: boolean;
  heading?: boolean;
  largerHeading?: boolean;
  smallText?: boolean;
  bold?: boolean;
  semibold?: boolean;
  center?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export interface InputWithLabelProps {
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

export interface AuthHeaderProps {
  onPress?: () => void;
}

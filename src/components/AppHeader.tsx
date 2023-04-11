import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import {white} from '../constants';

interface AppHeaderProps {
  title: string;
  containerStyle?: ViewStyle;
  headingStyle?: TextStyle;
}

const AppHeader = (props: AppHeaderProps) => {
  const {title, containerStyle, headingStyle} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.heading, headingStyle]}>{title}</Text>
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

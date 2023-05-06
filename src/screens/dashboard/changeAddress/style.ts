import {StyleSheet} from 'react-native';
import {darkerPrimary, headerBlue} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: headerBlue,
    flex: 1,
  },
  labelContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  formContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: darkerPrimary,
    paddingTop: 10,
    paddingBottom: 20,
  },
  appButton: {
    borderRadius: 5,
  },
});

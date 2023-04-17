import {StyleSheet} from 'react-native';
import {bgPrimary} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: bgPrimary,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: 70,
    width: '100%',
  },
  buttonContainer: {
    paddingVertical: 15,
  },
  forgotContainer: {
    marginVertical: 10,
  },
});

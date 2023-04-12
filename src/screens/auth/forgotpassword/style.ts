import {StyleSheet} from 'react-native';
import {bgPrimary} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: bgPrimary,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    height: 70,
    width: '100%',
  },
});

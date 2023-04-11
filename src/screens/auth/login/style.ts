import {StyleSheet} from 'react-native';
import {black} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
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
});

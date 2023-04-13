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
  textContainer: {
    height: 70,
    width: '75%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

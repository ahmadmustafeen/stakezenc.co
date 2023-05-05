import {StyleSheet} from 'react-native';
import {headerBlue} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: headerBlue,
    flex: 1,
  },
  introContainer: {
    marginTop: 10,
    paddingBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {headerBlue} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: headerBlue,
    flex: 1,
  },
  infoContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  headingContainer: {
    width: '90%',
    paddingTop: 10,
    alignSelf: 'center',
  },
  teamContainer: {
    width: '85%',
    paddingTop: 20,
    alignSelf: 'center',
  },
});

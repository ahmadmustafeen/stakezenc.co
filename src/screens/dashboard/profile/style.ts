import {StyleSheet} from 'react-native';
import {darkerPrimary, headerBlue} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: headerBlue,
    flex: 1,
  },
  profileContainer: {
    width: '90%',
    marginVertical: 20,
    alignSelf: 'center',
    height: 400,
    backgroundColor: darkerPrimary,
    marginTop: 10,
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: 'solid',
  },
});

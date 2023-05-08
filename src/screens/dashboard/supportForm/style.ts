import {StyleSheet} from 'react-native';
import {darkerPrimary, headerBlue, lighterBackground} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: headerBlue,
    flex: 1,
  },
  labelContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  heading: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 20,
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
  textAreaStyle: {
    width: '90%',
    height: 100,
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 10,
    color: 'white',
    backgroundColor: lighterBackground,
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
});

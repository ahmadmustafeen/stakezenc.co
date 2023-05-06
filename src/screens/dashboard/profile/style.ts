import {StyleSheet} from 'react-native';
import {
  darkerPrimary,
  headerBlue,
  lighterBackground,
  primaryBlue,
} from '../../../constants';

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
  imageContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: primaryBlue,
  },
  infoContainer: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  info: {
    paddingHorizontal: 10,
    backgroundColor: lighterBackground,
    marginVertical: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

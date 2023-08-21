import {StyleSheet} from 'react-native';
import {darkerPrimary, headerBlue, white} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: headerBlue,
    flex: 1,
  },
  depositContainer: {
    marginTop: 20,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: white,
  },
  infoContainer: {
    backgroundColor: darkerPrimary,
    paddingBottom: 20,
  },
  infoTabContainer: {
    width: '80%',
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  alignLeftContainer: {
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  alignRightContainer: {
    width: '50%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  verticalPadding: {
    paddingVertical: 10,
  },
  qrContainer: {
    width: 200,
    borderRadius: 4,
    height: 200,
    alignSelf: 'center',
  },
  addressContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  rowContainer: {
    paddingVertical: 10,
    alignSelf: 'center',
    width: '80%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  appButton: {
    borderRadius: 5,
  },
  additionalText: {
    width: '90%',
    alignSelf: 'center',
  },
  labelContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

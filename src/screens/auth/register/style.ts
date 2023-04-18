import {StyleSheet} from 'react-native';
import {bgPrimary, secondaryBlue} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: bgPrimary,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputContainer: {
    height: 70,
    width: '100%',
  },
  buttonContainer: {
    paddingTop: 15,
  },
  headerContainer: {
    backgroundColor: secondaryBlue,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  headerComponentContainer: {
    paddingBottom: 10,
    paddingTop: 30,
    width: '100%',
  },
  headerComponentTitleContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  headerComponentDescContainer: {
    width: '85%',
    alignSelf: 'center',
  },
  headerComponentButtonContainer: {
    paddingVertical: 15,
  },
});

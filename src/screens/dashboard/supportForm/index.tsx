import {ScrollView, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppButton, AppText, Header} from '../../../components';
import AppInput from '../../../components/AppInput';

const SupportFormScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headingContainer}>
        <AppText children="Support" largerHeading white />
      </View>
      <View style={styles.infoContainer}>
        <AppText secondary text>
          Home
        </AppText>
        <AppText secondary text>
          {' / Support'}
        </AppText>
      </View>
      <ScrollView style={styles.formContainer}>
        <View style={styles.heading}>
          <AppText white heading>
            Generate Ticket
          </AppText>
        </View>

        <View style={styles.infoContainer}>
          <AppText white bold text>
            Email:
          </AppText>
          <AppText secondary text>
            {'   engr.ahmadmustafeen@gmail.com'}
          </AppText>
        </View>

        <View style={styles.labelContainer}>
          <AppText children="Select Issue" white text />
        </View>
        <AppInput placeholder="-- Select Issue --" />
        <View style={styles.labelContainer}>
          <AppText children="Message" white text />
        </View>
        <TextInput
          placeholder="Message"
          multiline
          style={styles.textAreaStyle}
          textAlignVertical="top"
          placeholderTextColor="white"
        />
        <AppButton
          label="Submit Request"
          width={'90%'}
          uppercase
          containerStyle={styles.appButton}
        />
      </ScrollView>
    </View>
  );
};

export default SupportFormScreen;

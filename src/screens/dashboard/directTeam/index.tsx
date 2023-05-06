import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';

const DirectTeam = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headingContainer}>
        <AppText children="Direct Team" largerHeading white />
      </View>
      <View style={styles.infoContainer}>
        <AppText secondary text>
          Home
        </AppText>
        <AppText secondary text>
          {' / Direct Team'}
        </AppText>
      </View>
      <View style={styles.teamContainer}>
        <AppText
          children="You Don't have any members in your Direct Team."
          white
          text
        />
      </View>
    </View>
  );
};

export default DirectTeam;

import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {white} from '../../../constants';

const StructureTeam = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headingContainer}>
        <AppText children="Structure" largerHeading white />
      </View>
      <View style={styles.teamContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AntDesignIcon
            name="pluscircle"
            style={[{color: white, marginRight: 10, fontSize: 18}]}
          />
          <AppText secondary text children="AhmadMustafeen" />
        </View>
      </View>
    </View>
  );
};

export default StructureTeam;

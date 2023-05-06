import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {AppText, Header} from '../../../components';

//@ts-ignore
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const StructureTeam = (props: any) => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <View style={styles.headingContainer}>
        <AppText children="Structure" largerHeading white />
      </View>
      <View style={styles.teamContainer}>
        <View style={styles.itemContainer}>
          <AntDesignIcon name="pluscircle" style={styles.icon} />
          <AppText secondary text children="AhmadMustafeen" />
        </View>
      </View>
    </View>
  );
};

export default StructureTeam;

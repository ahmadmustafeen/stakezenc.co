/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React, {useContext} from 'react';
import {AppText, Header} from '../../../components';
import {InfoGraphicContainer} from '../../../components/InfoGraphicContainer';
import {styles} from './style';
import MyContext from '../../../context/authContext';

const HomeScreen = (props: any) => {
  const {
    data: {user},
    // setContextData,
  } = useContext(MyContext);

  console.log({user});
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={{paddingBottom: 20}}>
        <View style={styles.introContainer}>
          <AppText white largerHeading>
            {`Welcome ${user?.full_name}`}
          </AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText white text>
            Home
          </AppText>
          <AppText secondary text>
            {' / Personal Area'}
          </AppText>
        </View>

        <InfoGraphicContainer
          value={user?.current_balance}
          heading="Current Coins"
        />
        <InfoGraphicContainer
          value={user?.total_income}
          heading="Total Coins"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

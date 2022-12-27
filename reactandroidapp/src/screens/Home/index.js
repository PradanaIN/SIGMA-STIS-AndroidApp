import React from 'react';
import {Text, Image} from 'react-native';
import {View} from 'native-base';
import {Button} from '../../common';

import styles from './homeStyle.js';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={{uri: 'https://stis.ac.id/media/source/logo.png'}}
          />
        </View>

        <View style={styles.subView}>
          <Text style={styles.appName}>SISKES1</Text>
          <View style={{marginTop: 15}}>
            <Button
              onPress={() => navigation.navigate('SignIn')}
              bgColor="#4793d6"
              bdColor="#fff"
              textColor="#fff">
              Sign In
            </Button>
          </View>
          <View style={{marginTop: 15}}>
            <Button
              bdColor="#4793d6"
              onPress={() => navigation.navigate('SignUp')}
              textColor="#4793d6">
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

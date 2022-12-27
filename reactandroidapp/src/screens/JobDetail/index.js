import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './jobDetailStyle.js';
import {AuthContext} from '../../context';
import {AuthCard} from '../../common';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input} from 'native-base'

export function JobDetail({route, navigation}) {
  const job = route?.params?.job;
  const {state, dispatch} = useContext(AuthContext);

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <AuthCard>
    <View style={styles.jobDetailContainer}>
      <View style={styles.jobDetailContent}>
        <View style={styles.jobDetailHeader}>
          <TouchableOpacity
            style={styles.jobDetailCircleContainer}
            onPress={() => handleBackButton()}>
            <AntDesign name="arrowleft" size={22} color="#333333" />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.welcomeText}>Edit Event</Text>
          <Text style={{color: '#C9CACA', fontSize: 14}}>
            Fill in all the data below
          </Text>
        </View>

        <View>
          <View style={{marginTop: 10}}>
            <View style={{marginBottom: 10}}>
              <Input placeholder="Nama" type="text" value={job?.company?.name}/>
            </View>
            <View style={{marginBottom: 10}}>
              <Input placeholder="Prioritas" type="text" />
            </View>
            <View style={{marginBottom: 10}}>
              <Input placeholder="Tanggal" type="text" />
            </View>
            <View style={{marginBottom: 10}}>
              <Input placeholder="Jam" type="text" />
            </View>            
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={styles.delete}>
            <Text style={{color: 'white'}}>Delete Event</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={styles.done}>
            <Text style={{color: 'white'}}>Edit Event</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
    </AuthCard>
  );
}

import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './eventDetailStyle.js';
import {AuthCard} from '../../common';
import {Input} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseURL } from '../../api/BaseURL.js';

export function AddEvent({route, navigation}) {
  const [nama, setNama] = useState(null);
  const [prioritas, setPrioritas] = useState(null);
  const [tanggal, setTanggal] = useState(null);
  const [waktu, setWaktu] = useState(null);
  const [token, setToken] = useState('')

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const getToken = async () => {
    setToken(await AsyncStorage.getItem('jwt'));
  }

  useEffect(()=>{
    getToken()
  }, [])

  const data = {
    nama: nama,
    prioritas: prioritas,
    tanggal: tanggal,
    waktu: waktu
  }

  const handleAddEvent = () => {
    axios(`${BaseURL}/event`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data
      })
      .then(() => {
        handleBackButton();
      })
      .catch(e => {
        console.log(`error ${e}`);
      });
  };

  // testing
  // const handleAddEvent = () => {
  //   axios(`${BaseURL}/event`, {
  //       method: 'POST',
  //       data: data
  //     })
  //     .then(() => {
  //       handleBackButton();
  //     })
  //     .catch(e => {
  //       console.log(`error ${e}`);
  //     });
  // };

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
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.welcomeText}>Add Event</Text>
          <Text style={{color: '#C9CACA', fontSize: 14}}>
            Fill in all the data below
          </Text>
        </View>

        <View>
          <View style={{marginTop: 10}}>
            <View style={{marginBottom: 20}}>
              <Input
                placeholder="Nama"
                type="text"
                value={nama}
                onChangeText={text => setNama(text)}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Input
                placeholder="Prioritas"
                type="text"
                value={prioritas}
                onChangeText={text => setPrioritas(text)}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Input
                placeholder="YYYY-MM-DD"
                type="date"
                value={tanggal}
                onChangeText={text => setTanggal(text)}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Input
                placeholder="Jam"
                type="text"
                value={waktu}
                onChangeText={text => setWaktu(text)}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={handleAddEvent} style={styles.done}>
            <Text style={{color: 'white'}}>Add Event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthCard>
  );
}

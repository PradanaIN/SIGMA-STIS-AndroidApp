import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './eventDetailStyle.js';
import {AuthCard} from '../../common';
import Icon from 'react-native-vector-icons/AntDesign';
import {Input} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseURL} from '../../api/BaseURL.js';

export function EventDetail({route, navigation}) {
  const event = route?.params?.dataEvents;
  const [id, setId] = useState(event?.id);
  const [nama, setNama] = useState(event?.nama);
  const [prioritas, setPrioritas] = useState(event?.prioritas);
  const [tanggal, setTanggal] = useState(event?.tanggal);
  const [waktu, setWaktu] = useState(event?.waktu);
  const [token, setToken] = useState('');
  const [role, setRole] = useState('')

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const data = {
    nama: nama,
    prioritas: prioritas,
    tanggal: tanggal,
    waktu: waktu,
  };

  const getToken = async () => {
    setToken(await AsyncStorage.getItem('jwt'));
    setRole(await AsyncStorage.getItem('role'))    
  };

  useEffect(() => {
    getToken();
  }, []);

  console.log(token);

  const handleEdit = () => {
    axios(`${BaseURL}/event/${event.id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then(() => {
        handleBackButton();
      })
      .catch(e => {
        console.log(`error ${e}`);
      });
  };

  const handleDelete = () => {
    axios(`${BaseURL}/event/${event.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        handleBackButton();
      })
      .catch(e => {
        console.log(`error ${e}`);
      });
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
                <Input
                  placeholder="Nama"
                  type="text"
                  value={nama}
                  onChangeText={text => setNama(text)}
                />
              </View>
              <View style={{marginBottom: 10}}>
                <Input
                  placeholder="Prioritas"
                  type="text"
                  value={prioritas}
                  onChangeText={text => setPrioritas(text)}
                />
              </View>
              <View style={{marginBottom: 10}}>
                <Input
                  placeholder="YYYY-MM-DD"
                  type="text"
                  value={tanggal}
                  onChangeText={text => setTanggal(text)}
                />
              </View>
              <View style={{marginBottom: 10}}>
                <Input
                  placeholder="Jam"
                  type="text"
                  value={waktu}
                  onChangeText={text => setWaktu(text)}
                />
              </View>
            </View>
          </View>

          {role=="admin"? (
          <View
            style={{
              marginTop: 50,
              marginBottom: 30,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={handleDelete} style={styles.delete}>
              <Text style={{color: 'white'}}>Delete Event</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEdit} style={styles.done}>
              <Text style={{color: 'white'}}>Edit Event</Text>
            </TouchableOpacity>
          </View>
          ):null}
        </View>
      </View>
    </AuthCard>
  );
}

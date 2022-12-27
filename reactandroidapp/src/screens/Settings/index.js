import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
import {AuthCard} from '../../common';
import styles from './settingsStyle.js';
import {Input} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BaseURL} from '../../api/BaseURL';

const SignUp = ({navigation}) => {
  const {inputStyle, labelStyle, containerStyle} = stylesInput;
  const [dataUser, setDataUser] = useState('');

  const getUserID = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    const token = await AsyncStorage.getItem('jwt');
    if(token && user_id){
      const result = await axios({
        url: `${BaseURL}/user/${user_id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataUser(result.data);
    }
  };

  useFocusEffect(useCallback(() => {
    getUserID();
  }, []));

  return (
    <AuthCard>
      <View style={{marginTop: 1, marginBottom: 10}}>
        <Text style={styles.welcomeText}>Hello {dataUser.nama}</Text>
      </View>

      <View>
        <View style={{marginTop: 10}}>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="Nama"
              type="text"
              isReadOnly={true}
              value={dataUser.nama}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="Jenis Kelamin"
              type="text"
              isReadOnly={true}
              value={dataUser.jk}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="Jabatan"
              type="text"
              isReadOnly={true}
              value={dataUser.jabatan}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="No Handphone"
              type="number"
              isReadOnly={true}
              value={dataUser.nohp}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="Email"
              type="email"
              isReadOnly={true}
              value={dataUser.email}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="Username Instagram"
              type="text"
              isReadOnly={true}
              value={dataUser.instagram}
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
        <TouchableOpacity
          onPress={() => navigation.navigate('EditSetting', {dataUser})}
          style={styles.done}>
          <Text style={{color: 'white'}}>Edit Data</Text>
        </TouchableOpacity>
      </View>
    </AuthCard>
  );
};

export default SignUp;

const stylesInput = {
  inputStyle: {
    color: '#000',
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#878787',
    borderRadius: 5,
    height: 40,
    marginTop: 10,
  },
};

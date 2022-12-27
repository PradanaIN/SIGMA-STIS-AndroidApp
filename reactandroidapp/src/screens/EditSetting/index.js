import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthCard} from '../../common';
import {Select, Box, CheckIcon, Center, ScrollView} from 'native-base';
import styles from '../Settings/settingsStyle'
import {Input, Pressable} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BaseURL } from '../../api/BaseURL';

export const EditSetting = ({navigation, route}) => {
  const user = route?.params?.dataUser;
  const {containerStyle} = stylesInput;
  const [service, setService] = useState(user.jk);
  const [jabatan, setJabatan] = useState(user.jabatan);
  const [instagram, setInstagram] = useState(user.instagram);
  const [nama, setNama] = useState(user.nama);
  const [email, setEmail] = useState(user.email);
  const [nohp, setNohp] = useState(user.nohp);
  const [password, setPassword] = useState(user.password);
  const [token, setToken] = useState('');

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const getToken = async () => {
    setToken(await AsyncStorage.getItem('jwt'));
  };

  useEffect(() => {
    getToken();
  }, []);

  const data = {
    nama: nama,
    email: email,
    password: password,
    nohp: nohp,
    jabatan: jabatan,
    jk: service,
    instagram: instagram,
  };

  const handleEdit = () => {
    axios(`${BaseURL}/user/${user.id}`, {
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

  // testing
  // const handleEdit = () => {
  //   axios(`${BaseURL}/user/${user.id}`, {
  //     method: 'PUT',
  //     data: data,
  //   })
  //     .then(() => {
  //       handleBackButton();
  //     })
  //     .catch(e => {
  //       console.log(`error ${e}`);
  //     });
  // };

  return (
    <AuthCard>
      <View style={styles.jobDetailHeader}>
        <TouchableOpacity
          style={styles.jobDetailCircleContainer}
          onPress={() => handleBackButton()}>
          <AntDesign name="arrowleft" size={22} color="#333333" />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 1, marginBottom: 10}}>
        <Text style={styles.welcomeText}>Hello {user.nama}</Text>
        <Text style={{color: '#C9CACA', fontSize: 14}}>
          Edit your data below
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
          <View style={containerStyle}>
            <Box>
              <Select
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Jenis Kelamin"
                placeholder="Jenis Kelamin"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mb={2.5}
                onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Laki-Laki" value="lakilaki" />
                <Select.Item label="Wanita" value="wanita" />
              </Select>
            </Box>
          </View>
          <View style={containerStyle}>
            <Box>
              <Select
                selectedValue={jabatan}
                minWidth="200"
                accessibilityLabel="Jabatan"
                placeholder="Jabatan"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mb={2.5}
                onValueChange={itemValue => setJabatan(itemValue)}>
                <Select.Item label="Ketua" value="ketua" />
                <Select.Item label="Wakil Ketua" value="wakil_ketua" />
                <Select.Item label="Sekretaris" value="sekretaris" />
                <Select.Item label="Bendahara" value="bendahara" />
                <Select.Item label="Anggota" value="anggota" />
              </Select>
            </Box>
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="No Handphone"
              type="number"
              value={nohp}
              onChangeText={text => setNohp(text)}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Input
              placeholder="Username Instagram"
              type="text"
              value={instagram}
              onChangeText={text => setInstagram(text)}
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
          onPress={handleEdit}
          style={styles.done}>
          <Text style={{color: 'white'}}>Edit Data</Text>
        </TouchableOpacity>
      </View>
    </AuthCard>
  );
};

// export default editSetting;

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

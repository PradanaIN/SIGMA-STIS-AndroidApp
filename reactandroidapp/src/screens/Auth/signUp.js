import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthCard} from '../../common';
import {Select, Box, CheckIcon, Center, ScrollView} from 'native-base';
import styles from './authStyle.js';
import {Input, Pressable} from 'native-base';
import axios from 'axios';
import {BaseURL} from '../../api/BaseURL';

const SignUp = ({navigation}) => {
  const {containerStyle} = styles;
  const [service, setService] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [nama, setNama] = useState('');
  const [nohp, setNohp] = useState('');
  const [instagram, setInstagram] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const data = {
    nama: nama,
    email: email,
    password: password,
    nohp: nohp,
    jabatan: jabatan,
    jk: service,
    instagram: instagram
  };

  const handleRegister = () => {
    axios(`${BaseURL}/register`, {
        nama: nama,
        email: email,
        password: password,
        confpassword: password,
        nohp: nohp,
        jabatan: jabatan,
        jk: service,
        instagram: instagram,
      })
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(e => {
        console.log(`error ${e}`);
      });
  };

  return (
    <AuthCard>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topTextView}>
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={[styles.topText]}>
            Sign In
          </Text>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={[styles.topText, {color: '#4793d6'}]}>
            SignUp
          </Text>
        </View>

        <View style={{marginTop: 24, marginBottom: 20}}>
          <Text style={styles.welcomeText}>Welcome to 3SI1</Text>
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

            <View style={{marginBottom: 10}}>
              <Input
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)} mr="2">
                    <FontAwesome5 name={show ? 'eye' : 'eye-slash'} size={20} />
                  </Pressable>
                }
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <Input
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)} mr="2">
                  <FontAwesome5 name={show ? 'eye' : 'eye-slash'} size={20} />
                </Pressable>
              }
              placeholder="Konfirmasi Password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={handleRegister} style={styles.done}>
            <Icon name="arrowright" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    borderWidth: 1,
    borderColor: '#878787',
    borderRadius: 5,
    height: 40,
    marginTop: 10,
  },
};

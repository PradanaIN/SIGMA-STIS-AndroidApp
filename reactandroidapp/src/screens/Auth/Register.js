import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthCard} from '../../common';
import {Select, Box, CheckIcon, Center, ScrollView} from 'native-base';
import styles from './authStyle.js';
import {Input, Pressable} from 'native-base';

const Register = ({navigation}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  const [show, setShow] = useState(false);

  return (
    <AuthCard>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topTextView}>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={[styles.topText]}>
            Login
          </Text>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={[styles.topText, {color: '#4793d6'}]}>
            Register
          </Text>
        </View>

        <View style={{marginTop: 24, marginBottom: 20}}>
          <Text style={styles.welcomeText}>Regsiter</Text>
          <Text style={{color: '#C9CACA', fontSize: 12}}>
            Sistem Informasi Kegiatan Mahasiswa STIS
          </Text>
        </View>

        <View>
          <View style={{marginTop: 10}}>
            <View style={{marginBottom: 10}}>
              <Input placeholder="Nama Lengkap" type="text" />
            </View>
            <View style={{marginBottom: 10}}>
              <Input placeholder="Email" type="email" />
            </View>
            <View style={{marginBottom: 10}}>
              <Input placeholder="Username" type="text" />
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
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.done}>
            <Icon name="arrowright" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AuthCard>
  );
};

export default Register;

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

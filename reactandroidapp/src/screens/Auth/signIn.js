import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthCard} from '../../common';
import styles from './authStyle.js';
import {
  Input,
  Pressable
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {user_login} from '../../api/user_api';
import axios from 'axios';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
  };

  const handleLogin = () => {
    user_login({
      email: email.toLocaleLowerCase(),
      password: password,
    })
      .then(result => {
        if (result.status == 200) {
          AsyncStorage.setItem('jwt', result.data.token);
          AsyncStorage.setItem('user_id', result.data.data.id);
          if(result.data.data.jabatan==='ketua'){
            AsyncStorage.setItem('role', "admin");
          }
          navigation.navigate('Awal');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <AuthCard>
      <View style={styles.topTextView}>
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={[styles.topText, {color: '#4793d6'}]}>
          Sign In
        </Text>
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={[styles.topText]}>
          SignUp
        </Text>
      </View>

      <View style={{marginTop: 24}}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
      </View>

      <View>
        <View style={{marginTop: 10}}>
          <View style={{marginBottom: 20}}>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

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
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={handleLogin} style={styles.done}>
          <FontAwesome5 name="arrow-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </AuthCard>
  );
};

export default SignIn;

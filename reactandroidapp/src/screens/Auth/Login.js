import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthCard} from '../../common';
import styles from './authStyle.js';
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
} from 'native-base';

const Login = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
  };

  return (
    <AuthCard>
      <View style={styles.topTextView}>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={[styles.topText, {color: '#4793d6'}]}>
          Login
        </Text>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={[styles.topText]}>
          Register
        </Text>
      </View>

      <View style={{marginTop: 24}}>
        <Text style={styles.welcomeText}>Silakan Login Terlebih Dahulu!</Text>
        <Text style={{color: '#C9CACA', fontSize: 12}}>
          Jika belum memiliki akun, silakan registrasi terlebih dahulu!
        </Text>
      </View>

      <View>
        <View style={{marginTop: 10}}>
          <View style={{marginBottom: 20}}>
            <Input placeholder="Email" type="email" />
          </View>

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

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Awal')}
          style={styles.done}>
          <FontAwesome5 name="arrow-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </AuthCard>
  );
};

export default Login;

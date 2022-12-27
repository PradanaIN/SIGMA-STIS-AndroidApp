import React, {useState, useEffect} from 'react';
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  NativeBaseProvider,
} from 'native-base';
import {
  View,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './membersStyle';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseURL} from '../../api/BaseURL';

const Example = () => {
  const [dataUser, setDataUser] = useState({});

  const getEvents = async () => {
    const token = await AsyncStorage.getItem('jwt');
    if(token){
      const result = await axios({
        url: `${BaseURL}/user`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataUser(result.data.user);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Box>
      <FlatList
        data={dataUser}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="0.8"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={['0', '4']}
            pr={['0', '5']}
            py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              {item.jk == 'lakilaki' ? (
                <Avatar
                  size="48px"
                  source={{
                    uri: 'https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg?w=2000',
                  }}
                />
              ) : (
                <Avatar
                  size="48px"
                  source={{
                    uri: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=360',
                  }}
                />
              )}
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.nama}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.nohp}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                {item.jabatan}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView style={styles.homeContainer}>
        <View style={styles.homeContent}>
          <Example />
        </View>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

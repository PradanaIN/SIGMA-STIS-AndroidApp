import React, {useState, useContext, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './homeStyle.js';
import {AuthContext} from '../../context';
import {Box} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styless from '../../components/Event/eventStyle.js';
import {BaseURL} from '../../api/BaseURL.js';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({navigation}) => {
  const {state, dispatch} = useContext(AuthContext);
  const [role, setRole] = useState('')
  const [dataEvents, setDataEvents] = useState({});
  const [dataUser, setDataUser] = useState('');

  const isBookmarked = () => {
    let value;
    let bookmarkedJobs = state?.bookmarks;
    value = bookmarkedJobs?.find(bookmarkedJob => bookmarkedJob.id === job.id);
    return value;
  };

  const getEvents = async () => {
    const token = await AsyncStorage.getItem('jwt');
    setRole(await AsyncStorage.getItem('role'))
    if (token) {
      const result = await axios({
        url: `${BaseURL}/event`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataEvents(result.data.event);
    }
  };

  useFocusEffect(useCallback(() => {
    getEvents();
    getUserID();
  }, []));

  const getUserID = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    const token = await AsyncStorage.getItem('jwt');
    if (token && user_id) {
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

  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{width: '100%'}}
      showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={styles.homeContainer}>
        <View style={styles.homeContent}>
          <View style={styles.homeHeader}>
            <View>
              <Text style={styles.greetings}>Hello {dataUser.nama}!</Text>
              <Text style={styles.greetings}>How is your day?</Text>
            </View>
            <View style={styles.profilePicWrapper}>
              {dataUser.jk == 'wanita' ? (
                <Image
                  source={{
                    uri: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=360',
                  }}
                  style={styles.profilePic}
                />
              ) : (
                <Image
                  source={{
                    uri: 'https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg?w=2000',
                  }}
                  style={styles.profilePic}
                />
              )}
            </View>
          </View>

          <View style={styles.homeHeader}>
            <Text style={styles.definiton}>
              Sistem Informasi Kegiatan Kelas 3SI1 merupakan aplikasi yang
              digunakan untuk mendapatkan berbagai informasi mengenai
              kegiatan-kegiatan yang diselenggarakan oleh Kelas 3SI1
            </Text>
          </View>

          <View style={styles.container}>
            <View style={styles.section}>
              <Box style={role==="admin"? styles.between: styles.start}>
                <Text style={styles.heading}>Lists Event</Text>
                {role=="admin"? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddEvent')}
                  style={styles.done}>
                  <Text style={{color: 'white'}}>Add Event</Text>
                </TouchableOpacity>
                ):null}
              </Box>
              <ScrollView
                horizontal={false}
                style={{width: '100%'}}
                showsVerticalScrollIndicator={false}>
                {dataEvents.length > 0
                  ? dataEvents.map((item, index) => (
                      <View key={item.id}>
                        <TouchableOpacity
                          style={styless.jobContainer}
                          onPress={() =>
                            navigation.navigate('EventDetail', {
                              dataEvents: item,
                            })
                          }>
                          <Image
                            source={{
                              uri: 'https://img.freepik.com/free-vector/festive-calendar-event-holiday-celebration-party-work-schedule-planning-project-management-deadline-idea-office-managers-excited-colleagues_335657-1610.jpg?w=2000',
                            }}
                            style={styless.jobImage}
                          />
                          <View style={styless.jobInfo}>
                            <Text
                              style={styless.jobCompany}
                              numberOfLines={1}
                              ellipsizeMode="tail">
                              {item?.prioritas}
                            </Text>
                            <Text
                              style={styless.jobRole}
                              numberOfLines={1}
                              ellipsizeMode="tail">
                              {item?.nama}
                            </Text>
                            <View style={styless.flexRow}>
                              <Text
                                style={styless.jobSalary}
                                numberOfLines={1}
                                ellipsizeMode="tail">
                                {item?.tanggal} |
                              </Text>
                              <Text
                                style={styless.jobLocation}
                                numberOfLines={1}
                                ellipsizeMode="tail">
                                {item?.waktu}
                              </Text>
                            </View>
                          </View>
                          {isBookmarked() ? (
                            <FontAwesome
                              name="bookmark"
                              color="white"
                              size={20}
                            />
                          ) : (
                            <FontAwesome
                              name="bookmark-o"
                              color="white"
                              size={20}
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                    ))
                  : null}
              </ScrollView>
            </View>
          </View>
          {/* </FlatList> */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Home;

const handleGetToken = async () => {
  const datatoken = await AsyncStorage.getItem('jwt');
};

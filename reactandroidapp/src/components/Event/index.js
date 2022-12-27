import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './eventStyle.js';
import {AuthContext} from '../../context';
import {handleNestedNavigation} from '../../navigators/NavigatorHandler';
import {getScreenParent} from '../../utils/navigationHelper';

export function Job({item, navigation}) {
  const {state, dispatch} = useContext(AuthContext);

  const isBookmarked = () => {
    let value;
    let bookmarkedJobs = state?.bookmarks;
    value = bookmarkedJobs?.find(bookmarkedJob => bookmarkedJob.id === item.id);
    return value;
  };

  const handleNavigation = (route, params) => {
    handleNestedNavigation(navigation, getScreenParent(route), route, params);
  };

  return (
    <TouchableOpacity
      style={styles.jobContainer}
      onPress={() => handleNavigation('EventDetail', {item})}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/festive-calendar-event-holiday-celebration-party-work-schedule-planning-project-management-deadline-idea-office-managers-excited-colleagues_335657-1610.jpg?w=2000',
        }}
        style={styles.jobImage}
      />
      <View style={styles.jobInfo}>
        <Text style={styles.jobCompany} numberOfLines={1} ellipsizeMode="tail">
          {item?.prioritas}
        </Text>
        <Text style={styles.jobRole} numberOfLines={1} ellipsizeMode="tail">
          {item?.nama}
        </Text>
        <View style={styles.flexRow}>
          <Text style={styles.jobSalary} numberOfLines={1} ellipsizeMode="tail">
            {item?.tanggal} |
          </Text>
          <Text
            style={styles.jobLocation}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item?.waktu}
          </Text>
        </View>
      </View>
      {isBookmarked() ? (
        <FontAwesome name="bookmark" color="white" size={20} />
      ) : (
        <FontAwesome name="bookmark-o" color="white" size={20} />
      )}
    </TouchableOpacity>
  );
}

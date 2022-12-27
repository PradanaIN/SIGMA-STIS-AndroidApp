import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../screens/Dashboard';
import Notifications from '../screens/Members';
import Settings from '../screens/Settings';
import {EventDetail} from '../screens/EventDetail';
import {AddEvent} from '../screens/AddEvent';
import {EditSetting} from '../screens/EditSetting';
// import {
//   Dashboard,
//   EventDetail,
//   Bookmarks,
//   Settings,
//   Notifications,
//   Messages,
// } from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Foundation
              name="home"
              color={focused ? '#4793d6' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Members"
        component={Notifications}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="people"
              color={focused ? '#4793d6' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="settings-sharp"
              color={focused ? '#4793d6' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabStack">
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddEvent"
        component={AddEvent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditSetting"
        component={EditSetting}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

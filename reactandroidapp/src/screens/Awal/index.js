import React, {useReducer} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from '../../navigators/Stack';
import initialState from '../../store/state';
import reducer from '../../store/reducer';
import {AuthContext} from '../../context';
import {NativeBaseProvider} from 'native-base';

const App = ({navigation})  => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NativeBaseProvider>
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.areaContainer}>
          <AppStack />
      </SafeAreaView>
    </AuthContext.Provider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
  },
});

export default App;

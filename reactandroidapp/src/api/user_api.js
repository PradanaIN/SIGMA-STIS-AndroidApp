import ApiManager from './ApiManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiToken } from './ApiManager';

export const user_login = async data => {
  try {
    const result = await ApiManager('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
}; 


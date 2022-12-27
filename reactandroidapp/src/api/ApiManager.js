import axios from 'axios';
import {BaseURL} from './BaseURL';

const ApiManager = axios.create({
  baseURL: BaseURL,
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;

export const ApiToken = token => {
  axios.create({
    baseURL: BaseURL,
    responseType: 'json',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })  
}
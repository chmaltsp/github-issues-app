import axios from 'axios';
import config from '../config.json';

const request = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${config.token}`
  }
});

export default request;

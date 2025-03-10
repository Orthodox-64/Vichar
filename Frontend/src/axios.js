import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.PROD ? '/api/v1' : 'http://localhost:5001/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
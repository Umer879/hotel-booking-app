import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api', // or your actual backend URL
});

export default API;

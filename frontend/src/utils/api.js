import axios from 'axios';

const API = axios.create({
  baseURL: "https://hotel-booking-app-production-15c0.up.railway.app/api", // or your actual backend URL
});

export default API;

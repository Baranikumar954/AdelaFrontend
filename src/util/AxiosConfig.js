import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // your API base URL
  timeout: 5000,                        // request timeout in ms
  headers: {
    'Content-Type': 'application/json',
    // Add any other custom headers here
  },
});

export default api;

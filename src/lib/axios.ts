import env from 'react-dotenv';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

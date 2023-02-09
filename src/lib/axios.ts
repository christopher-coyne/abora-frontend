import env from 'react-dotenv';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: env.API_URL,
});

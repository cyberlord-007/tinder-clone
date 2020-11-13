import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tinder-backend-web.herokuapp.com',
});

export default instance;

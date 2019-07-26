import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-8608a.firebaseio.com/'
});

export default instance;

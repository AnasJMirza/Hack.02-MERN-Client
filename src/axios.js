import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://hac2.herokuapp.com/api',
});

export default instance;
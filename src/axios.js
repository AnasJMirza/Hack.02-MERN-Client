import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://git.heroku.com/hac2.git',
});

export default instance;
import axios from 'axios';

const instance = axios.create({
 baseURL: "your-api-backend"
});

export default instance;

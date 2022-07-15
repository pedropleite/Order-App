import axios from 'axios';

const api = axios.create({
    baseURL: 'https://food-order-app-412dd-default-rtdb.firebaseio.com',
});

export default api;

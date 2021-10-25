import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

const cookie = localStorage.getItem('access_token');

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + cookie
    },
}

export default{

    Login: (login) =>
    axios.post(`${BASE_URL}/login`,login),

    DashboardData: () =>
    axios.get(`${BASE_URL}/dashboard`,token)
}
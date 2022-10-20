import axios from 'axios';

const oldUrl = "http://localhost:3050/api"
const herokuApiURl = 'https://pi-5-semestre-backend.herokuapp.com/'

const api = axios.create({
    baseURL: herokuApiURl,
});

export default api;
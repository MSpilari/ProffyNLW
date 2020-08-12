import axios from 'axios'

const baseURL = document.location.hostname === 'localhost' ? 
        'http://localhost:3333' : 
        'https://apiproffydb.herokuapp.com' 


const api = axios.create({
    baseURL: baseURL
});

export default api

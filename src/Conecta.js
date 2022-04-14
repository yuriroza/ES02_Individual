import axios from 'axios';

const Conecta = axios.create({baseURL: 'http://localhost:3001'});

export default Conecta;
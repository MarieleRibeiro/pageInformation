import axios from 'axios'

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/52be2ef0-5605-40a6-bb01-a19a8ee31cad'
});

export default api;
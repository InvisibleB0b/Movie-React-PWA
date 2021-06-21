import axios from 'axios';

export default axios.create({ baseURL: 'https://api.themoviedb.org/3', params: { api_key: '2d031ffa5bcb38a8bcf2d3c12904a7d8' } })
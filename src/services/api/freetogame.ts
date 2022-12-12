import axios from 'axios';

const freetogame = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': '6db00c4724msh2b533c10bc09cc9p1729b2jsn36f171f12e72',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
});

export default freetogame;

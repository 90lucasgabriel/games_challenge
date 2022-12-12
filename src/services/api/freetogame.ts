import axios from 'axios';

const freetogame = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
});

export default freetogame;

import axios from './axios';

axios.defaults.baseURL = process.env.RIOT_API_URL ;

const riotApi = {
    champions:{
        getAllChampions: () => axios.get('/data/pt_BR/champion.json'),
     },
  
};

export default riotApi;

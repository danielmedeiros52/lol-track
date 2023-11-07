import axios from './axios';

axios.defaults.baseURL = process.env.OPENAI_API_URL ;

const openAi = {
    champions:{
        getAllChampions: () => axios.get('/data/pt_BR/champion.json'),
     },
  
};

export default openAi;

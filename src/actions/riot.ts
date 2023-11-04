import api from '@/api/api';


export const getAllChampions = () =>
  api.champions
    .getAllChampions()
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
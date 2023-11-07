import riotApi from '@/api/riotApi';


export const getAllChampions = () =>
  riotApi.champions
    .getAllChampions()
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
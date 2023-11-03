import api from '@/api/api';

export const getConnections = async () => {
  return api.user
    .getConnections()
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
};

export const inviteConnection = async (id: string) => {
  return api.user
    .inviteConnection(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
};

export const getRecommendations = async () => {
  return api.user
    .recommendations({})
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
};

export const deleteConnection = async (id: string) => {
  return api.user
    .deleteConnection(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
};

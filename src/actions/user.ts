import api from '@/api/api';
import { UserRequestApiFilter } from '@/types/userRequestApiFilter';

export const getUserById = (id: string) =>
  api.user
    .getUserById(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const getConnections = () =>
  api.user
    .getConnections()
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const updateConnectionById = (id: string, status: string) =>
  api.user
    .updateConnectionById(id, status)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const deleteConnectionById = (id: string) =>
  api.user
    .deleteConnectionById(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const getRecommendations = () =>
  api.user
    .recommendations({})
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const getUserByText = (params: UserRequestApiFilter) => {
  return api.user
    .getUserByText(params)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
};

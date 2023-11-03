import api from '@/api/api';

export const patchUserProfile = ({ id, data }: { id: string; data: any }) =>
  api.profile
    .patchUserProfile({ id, data })
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

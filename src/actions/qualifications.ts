import api from '@/api/api';

export const postUserQualification = (data: any) =>
  api.qualifications
    .postUserQualification(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const deleteUserQualification = (id: number) =>
  api.qualifications
    .deleteUserQualification(id)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

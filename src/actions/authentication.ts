import api from '@/api/api';

import { RegistrationFields } from '@/types/registrationTypes';

export const registerUser = (data: RegistrationFields) =>
  api.authentication
    .postRegister(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const login = (data: any) =>
  api.authentication
    .login(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const logout = (data: any) =>
  api.authentication
    .logout(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const changePassword = (data: any) =>
  api.authentication
    .changePassword(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const token = (data: any) =>
  api.authentication
    .token(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const refreshToken = (data: any) =>
  api.authentication
    .refreshToken(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const verifyToken = (data: any) =>
  api.authentication
    .verifyToken(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

export const loginSSO = (data: any) =>
  api.authentication
    .loginSSO(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));

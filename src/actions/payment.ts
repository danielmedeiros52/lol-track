import { PaymentFields, PaymentIntentResponse } from './../types/payment.d';
import api from '@/api/api';

export const createPayment = async (data: PaymentFields): Promise<PaymentIntentResponse> => {
  return api.payment
    .createPayment(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
};

export const createMembership = async (data: {
  price_id: string;
  email: string;
  membership_type: string;
}) => {
  return api.payment
    .createMembership(data)
    .then((response) => Promise.resolve(response.data))
    .catch((e) => Promise.reject(e.response));
};

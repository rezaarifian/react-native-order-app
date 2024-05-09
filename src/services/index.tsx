import axios from 'axios';

// constants
import {API_URL} from '../constans/api';


const instance = axios.create({
  baseURL: 'https://b7bd6a50-0036-42bc-9b75-f732c791fe87.mock.pstmn.io/api',
  timeout: 60000,
  headers: {Accept: 'application/json', 'Content-Type': 'application/json', 'Accept-Encoding': 'identity'},
});

export const post = async (
  url: string,
  data: any,
  headers: any = {},
) => {
  try {
    const response = await instance({
      method: 'POST',
      url: url,
      data,
      headers: {...instance.defaults.headers, ...headers},
    });

    if (response?.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (err) {
    throw err || 'Terjadi kesalahan';
  }
};

export const get = async (url: string, params?: any, headers: any = {}) => {
  try {
    const response = await instance({
      method: 'GET',
      url: url,
      params,
      headers: {...instance.defaults.headers, ...headers},
    });
    if (response?.status === 200) {
        return response.data;
    }
  } catch (err) {
    // Handle Error Here
    throw err || 'Terjadi kesalahan';
  }
};

export const deleted = async (url: string, params?: any) => {
  try {
    const response = await instance({
      method: 'DELETE',
      url: url,
      params,
    });

    if (response?.status === 200) {
      return `success deleted order id ${response?.data?.order_id}`;
    } else {
      throw response.data;
    }
  } catch (err) {
    // Handle Error Here
    throw err || 'Terjadi kesalahan';
  }
};

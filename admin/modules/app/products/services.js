import Request from '../../../commons/utils/request';
import { ENDPOINT_PRODUCTS } from '../../../constants';

export const getProducts = async () => {
  const result = await Request.get(ENDPOINT_PRODUCTS);
  return result;
};

export const getProduct = async (id) => {
  const result = await Request.get(`${ENDPOINT_PRODUCTS}/${id}`);
  return result;
};

export const updateProduct = async (id, data) => {
  const result = await Request.patch(`${ENDPOINT_PRODUCTS}/${id}`, data);
  return result;
};

export const addProduct = async (data) => {
  const result = await Request.post(ENDPOINT_PRODUCTS, data);
  return result;
};

export const deleteProduct = async (id) => {
  const result = await Request.delete(`${ENDPOINT_PRODUCTS}/${id}`);
  return result;
};

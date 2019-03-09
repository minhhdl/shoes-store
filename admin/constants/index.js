export const API_URL = process.env.NODE_ENV === 'production' ? 'https://downyshoes.herokuapp.com/api' : 'http://localhost:5000/api';
export const S3_BUCKET = 'pmh-souvenir';
export const S3_URL = 'https://pmh-souvenir.s3.ap-southeast-1.amazonaws.com/';
export const TOKEN_INVALID_CODE = 'INVALID_TOKEN';
export const AUTHORIZATION_REQUIRED_CODE = 'AUTHORIZATION_REQUIRED';

//APP URLS
export const PRODUCTS_URL = '/admin/products';
export const PRODUCT_DETAIL = id => `/admin/products/detail?id=${id}`;
export const ADD_PRODUCT_URL = '/admin/products/add';
export const EDIT_PRODUCT_URL = id => `/admin/products/edit?id=${id}`;

//API ENDPOINTS
export const ENDPOINT_USER_LOGIN = `/auth/login`;
export const ENDPOINT_PRODUCTS = '/products';
export const ENDPOINT_GET_PRODUCT_BY_ID = id => `/products/detail/${id}`;

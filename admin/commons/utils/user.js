import cookies from './cookies';

export const User = {
  store: (user, access_token) => {
    cookies.set('downyshoes@accesstoken', access_token, { path: '/' });
    cookies.set('downyshoes@user', user, { path: '/' });
  },
  getCurrent: () => {
    const user = cookies.get('downyshoes@user');
    return user;
  },
  getToken: () => {
    const token = cookies.get('downyshoes@accesstoken');
    return token;
  },
  removeSession: () => {
    cookies.remove('downyshoes@accesstoken');
    cookies.remove('downyshoes@user');
  }
}
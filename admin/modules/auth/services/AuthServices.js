import Request from '../../../commons/utils/request';
import { ENDPOINT_USER_LOGIN, ENDPOINT_USER_LOGOUT } from '../../../constants';

export const login = async (credentials) => {
  try {
    const result = await Request.post(ENDPOINT_USER_LOGIN, credentials, true);
    return result;
  }catch(e){
    return null;
  }
}

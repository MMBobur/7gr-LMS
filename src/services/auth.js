// import { service } from '.';
import axios from 'axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getToken: (data) => axios.post('http://localhost:8000/api/admin/auth', data),
};

import axios from 'axios';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> master
>>>>>>> 371268a94636e82c182fe079c967e6f87e188a27
const baseURL = 'http://localhost:8080/api';
const service = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const CustomAxios = {
  _instance: null,
  get instance() {
    if (!this._instance) {
      this._instance = axios.create({ baseURL: '/api' });
    }
    return this._instance;
  },
};

service.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function execute(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}

export { service };
<<<<<<< HEAD
export default CustomAxios.instance;
=======
<<<<<<< HEAD
export default CustomAxios.instance;
=======
export default CustomAxios.instance;
>>>>>>> master
>>>>>>> 371268a94636e82c182fe079c967e6f87e188a27

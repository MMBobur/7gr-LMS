import { service } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/subjects"),
  getId: (id, data) => service.get(`/subjects/${id}`, data),
  create: (data) => service.post("/subjects", data),
  update: (id, data) => service.put(`/subjects/${id}`, data),
  delete: (id) => service.delete(`/subjects/${id}`),
  getUsers: (size, page) => service.get(`users?size=${size}&page=${page}`),
};
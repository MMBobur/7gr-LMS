import { service } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/groups"),
  getOne: (id) => service.get(`/groups/${id}`),
  create: (data) => service.post("/groups", data),
  update: (id, data) => service.put(`/groups/${id}`, data),
  delete: (id) => service.delete(`/groups/${id}`),
  getUsers: (size, page) => service.get(`groups?size=${size}&page=${page}`),
};
import { service } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/rooms"),
  create: (data) => service.post("/rooms", data),
  update: (id, data) => service.put(`/rooms/${id}`, data),
  delete: (id) => service.delete(`/rooms/${id}`),
  getOne: (id) => service.get(`/rooms/${id}`),
};

import { service } from ".";

export default {
  getStudents: () => service.get("/students"),
  setStudent: (data) => service.post("/students",data),
  delStudent: (id) => service.delete(`/students/${id}`),
  putStudent: (id, data) => service.put(`/students/${id}`, data),
};

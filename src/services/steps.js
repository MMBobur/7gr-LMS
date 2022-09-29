import { service } from ".";

export default {
  getSteps: () => service.get("/steps"),
  setSteps: (data) => service.post("/steps",data),
  delSteps: (id) => service.delete(`/steps/${id}`),
  putSteps: (id, data) => service.put(`/steps/${id}`, data),
};

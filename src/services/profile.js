import { apiClient } from "./config";

export const apiGetFreelancer = async () => {
  return apiClient.get(`/freelancers/me`);
};

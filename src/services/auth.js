import { apiClient, clearDetails } from "./config";

export const apiSignUp = async (payload) => {
  return apiClient.post("/signup", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/token", payload);
};

export const apiLogout = async () => {
  clearDetails();
};

export const apiCheckUsernameExists = async (userName) => {
  return apiClient.get(`/auth/${userName}`);
};
import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Erro na resposta:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Erro na requisição:", error.request);
    } else {
      console.error("Erro:", error.message);
    }
    return Promise.reject(error);
  }
);

export const api = {
  get: async (endpoint) => {
    const response = await apiClient.get(endpoint);
    return response.data;
  },
  post: async (endpoint, body) => {
    const config = body instanceof FormData ? { headers: { "Content-Type": "multipart/form-data" } } : {};
    const response = await apiClient.post(endpoint, body, config);
    return response.data;
  },
  put: async (endpoint, body) => {
    const config = body instanceof FormData ? { headers: { "Content-Type": "multipart/form-data" } } : {};
    const response = await apiClient.put(endpoint, body, config);
    return response.data;
  },
  delete: async (endpoint) => {
    const response = await apiClient.delete(endpoint);
    return response.data || { success: true };
  },
  patch: async (endpoint, body) => {
    const response = await apiClient.patch(endpoint, body);
    return response.data;
  },
};

export default api;

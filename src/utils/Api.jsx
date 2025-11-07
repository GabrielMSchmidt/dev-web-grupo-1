import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erro com resposta do servidor
      console.error('Erro na resposta:', error.response.status, error.response.data);
    } else if (error.request) {
      // Erro na requisição (sem resposta)
      console.error('Erro na requisição:', error.request);
    } else {
      // Outro tipo de erro
      console.error('Erro:', error.message);
    }
    return Promise.reject(error);
  }
);

export const api = {
  get: async (endpoint) => {
    try {
      const response = await apiClient.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer requisição GET:', error);
      throw error;
    }
  },

  post: async (endpoint, body) => {
    try {
      const config = {};
      
      if (body instanceof FormData) {
        config.headers = {
          'Content-Type': 'multipart/form-data',
        };
      }
      
      const response = await apiClient.post(endpoint, body, config);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer requisição POST:', error);
      throw error;
    }
  },

  put: async (endpoint, body) => {
    try {
      const response = await apiClient.put(endpoint, body);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer requisição PUT:', error);
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await apiClient.delete(endpoint);
      return response.data || { success: true };
    } catch (error) {
      console.error('Erro ao fazer requisição DELETE:', error);
      throw error;
    }
  },

  patch: async (endpoint, body) => {
    try {
      const response = await apiClient.patch(endpoint, body);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer requisição PATCH:', error);
      throw error;
    }
  },
};

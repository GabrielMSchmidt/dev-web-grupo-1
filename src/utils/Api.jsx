import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

// Configuração da instância do Axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos
});

// Interceptor de resposta para tratamento de erros global
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
  /**
   * Função auxiliar para fazer requisições GET
   * @param {string} endpoint - O endpoint da API (ex: '/produtos')
   * @returns {Promise} - Retorna os dados da resposta
   */
  get: async (endpoint) => {
    try {
      const response = await apiClient.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer requisição GET:', error);
      throw error;
    }
  },

  /**
   * Função auxiliar para fazer requisições POST
   * @param {string} endpoint - O endpoint da API
   * @param {Object} body - Os dados a serem enviados
   * @returns {Promise} - Retorna os dados da resposta
   */
  post: async (endpoint, body) => {
    try {
      const response = await apiClient.post(endpoint, body);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer requisição POST:', error);
      throw error;
    }
  },

  /**
   * Função auxiliar para fazer requisições PUT
   * @param {string} endpoint - O endpoint da API
   * @param {Object} body - Os dados a serem atualizados
   * @returns {Promise} - Retorna os dados da resposta
   */
  put: async (endpoint, body) => {
    try {
      const response = await apiClient.put(endpoint, body);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer requisição PUT:', error);
      throw error;
    }
  },

  /**
   * Função auxiliar para fazer requisições DELETE
   * @param {string} endpoint - O endpoint da API
   * @returns {Promise} - Retorna os dados da resposta
   */
  delete: async (endpoint) => {
    try {
      const response = await apiClient.delete(endpoint);
      return response.data || { success: true };
    } catch (error) {
      console.error('Erro ao fazer requisição DELETE:', error);
      throw error;
    }
  },

  /**
   * Função auxiliar para fazer requisições PATCH
   * @param {string} endpoint - O endpoint da API
   * @param {Object} body - Os dados a serem atualizados parcialmente
   * @returns {Promise} - Retorna os dados da resposta
   */
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

import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
    baseURL: config.apiUrl,
});

// Error interceptor stub for future auth handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Future: Handle 401 (unauthorized), refresh tokens, etc.
        console.error('API Error:', error.response?.status, error.message);

        // Re-throw so component can handle it
        return Promise.reject(error);
    }
);

export default apiClient;
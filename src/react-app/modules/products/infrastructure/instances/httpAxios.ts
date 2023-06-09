// modules/products/infrastructure/instances/httpAxios.ts

import axios from 'axios';
import { Http } from '../../domain/repositories/Http';
import { Some } from '../../application';

const headers = {
    'Content-Type': 'application/json'
};
axios.defaults.baseURL = import.meta.env.VITE_API_SERVER + '/';

export const httpAxios: Http = {
    get: async <T>(path: string, params?: Record<string, Some>, config?: Some) => {
        const response = await axios.get(path, { ...config, params, headers });

        return response.data as T;
    },
    post: async <T>(path: string, params?: Record<string, Some>, config?: Some) => {
        const response = await axios.post(path, { ...params }, { ...config, headers });

        return response.data as T;
    },
    put: async <T>(path: string, params?: Record<string, Some>, config?: Some) => {
        const response = await axios.put(path, { ...params }, { ...config, headers });

        return response.data as T;
    },
    delete: async <T>(path: string, params?: Some, config?: Some) => {
        const response = await axios.delete(path, { ...config, params, headers });

        return response.data as T;
    }
};

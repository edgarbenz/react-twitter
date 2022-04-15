import client from './client.js';

export const login = credentials => {
    return client.post('/auth/login', credentials);
}


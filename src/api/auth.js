import client, {ConfigureClient} from './client.js';

export const login = async (credentials) => {
    try {
        const {accessToken} = await client.post('/auth/login', credentials);
        ConfigureClient(accessToken);
        return true;
    } catch(error) {
        return error;
    }

}

// export const login = credentials => {
//     ConfigureClient(accessToken);
//     return client.post('/auth/login', credentials);
// }


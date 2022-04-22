import axios from 'axios';  //axios is a kind of connection provider like fetch
                          
const client = axios.create( {baseURL:process.env.REACT_APP_API_BASE_URL} ) // {baseURL: http://localhost:8000}   y process.env access to environment variables

const setAuthorizationHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`; //setea el client.defaults.headers.common['authorization'] a Bearer token en cuestion
     console.log("client.defaults.headers.common['Authorization']= ",client.defaults.headers.common['Authorization'])
     console.log("client= ",client);
}

client.interceptors.response.use(  // this function can receive 2 functions in that order
    respuesta => respuesta.data,
    queHorror => {
        if (!queHorror.response) {
            return Promise.reject( { message: queHorror.message} );
        }
        return Promise.reject({
            message: queHorror.response.statusText,
            ...queHorror.response.data,
        })
    }
);

export const ConfigureClient = ( accessToken ) => {
     console.log('accessToken en client.js = ',accessToken);
    if (accessToken) {
        setAuthorizationHeader(accessToken);
    }
}

export default client;
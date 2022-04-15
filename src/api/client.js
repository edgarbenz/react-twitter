import axios from 'axios';  //axios is a kind of connection provider like fetch
                          
const client = axios.create( {baseURL:process.env.REACT_APP_API_BASE_URL} ) // {baseURL: http://localhost:8000}   y process.env access to environment variables

client.interceptors.response.use(response => response.data);

export default client;
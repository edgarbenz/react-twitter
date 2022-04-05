import axios from 'axios';  //axios is a kind of connection provider like fetch

//const baseURL = 'http://localhost:8000'
                           // {baseURL: http://localhost:8000}
const client = axios.create( {baseURL:process.env.REACT_APP_API_BASE_URL} )
                                    //process.env access to environment variables
                                    //and.. REACT_APP_API_BASE_URL is a environment variable
console.log("process.env", process.env);

//console.log('client.interceptors.response= ', client.interceptors.response)
client.interceptors.response.use(response => response.data);

export default client;
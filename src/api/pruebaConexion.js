import conexion from 'axios';
console.log('conexion con axios= ',conexion);

const asiFuncionaAxios = () => {
/**********A esto le llaman "cliente":  a conectarse a la URL del Servidor *******************************/    
    const URL_1 = 'http://localhost:8000';
    //El cliente establece la conexion con la url http://localhost, por el puerto:8000
    const cliente = conexion.create( {baseURL: URL_1} );
    console.log('cliente= ',cliente);
    cliente.interceptors.response.use( respuesta => {   //interceptors ejecuta estas instrucciones antes de que lleguen al then o catch y luego regresa la respuesta.data para ya no batallar alla donde la vaya a usar, pero es pura webonada nomas y farsanteria jaja pero es una estupidez
        console.log ('la respuesta ', respuesta);
        console.log ('la respuesta.data ', respuesta.data )
        return respuesta.data
    });

/*********Ahora ya conectado el cliente ya puedo hacer un GET( leer )************/
    let URL_2 = '/api';     //estas rutas me las da el api que este usando, en este caso sparrest
    const URL_Tweets = `${URL_2}/tweets`;

    const getTweets= cliente.get(URL_Tweets);                               //Esto es una promesa porque va a esperar a que se conecte al servidor y traer los datos
    
    getTweets.then(datos => {
        console.log(`Los datos en la URL: ${URL_1}${URL_Tweets} son: `);
        console.log(datos);
    }).catch("Ocurrio un error");

/*********Ahora ya conectado el cliente ya puedo hacer un POST (firmarme y me regrese un token de acceso************/
URL_2 = '/auth/login';    //estas rutas me las da el api que este usando, en este caso sparrest
const credenciales = { username: "@tweeterman", password: "1234"} //para firmarte debe existir estos datos en la url 

const firmarteConTuUsuario= cliente.post(URL_2, credenciales);               //esto es una promesa
firmarteConTuUsuario.then(accessToken => {
    console.log(`El token de acceso de la : ${URL_1}${URL_2} es: `);
    console.log(accessToken);
}).catch((error)=> {
    console.log("Las credenciales no son validas para autenticarse, error: ",error);
});

/**Ahora ya conectado el cliente ya puedo hacer un POST ( registrar un usuario recibe username y password y me regresa si se pudo o no)************/
URL_2 = '/auth/register';      //estas rutas me las da el api que este usando, en este caso sparrest
const usuarioNuevo = { 
    email: "rebeco_de_jesus@gmail.com", 
    username: "@rebeco_de_jesus", 
    password: "1234",
    nombre: "Rebeco de Jesus Rodarte Obregon"

} //para firmarte debe existir estos datos en la url 
    

const registrarUsuario= cliente.post(URL_2, usuarioNuevo);               //esto es una promesa
registrarUsuario.then(sePudoONo => {
    console.log(`Registre un usuario en: ${URL_1}${URL_2}`);
    console.log('y me dice que se pudo o no:  ',sePudoONo);
}).catch((error)=> {
    console.log("No se pudo registrar ya que ocurrio un error: ",error);
});



}

export default asiFuncionaAxios;
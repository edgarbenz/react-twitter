import React from 'react';
import getTweets from '../../api/tweet';
import classnames from 'classnames';
import stylesModule from './TweetPage.module.css';

console.log('stylesModule= ',stylesModule);

const TweetsPage = ( {className} ) => {
    const [tweets, setTweets]= React.useState([]);

    //React.useEffect( () => {
    //    getTweets().then(respuesta => {
    //        setTweets(respuesta.data);
    //    });
    //},[]);
    React.useEffect( () => {
        console.log("entro react.useEffect")
        getTweets().then(datos => {
            setTweets(datos);
        });
    },[]);


    console.log("tweets= ",tweets);

    const liStyle = {
        color: 'blue'
    }

    const tweetsHTML= tweets.map( (tweet) => (  //here the interceptor works: client.interceptors.response.use(response => response.data);
        <li style={liStyle} onClick={() => alert('Enlace a detalle ... ')} key= {tweet.id} >{tweet.content}</li>
    ));

    //const styles = { color: tweets.length > 2 ? 'red' : 'green' }

    console.log("tweetsHTML= ",tweetsHTML);
    console.log('stylesModule= ',stylesModule);

    return ( 
        <div className= { classnames(stylesModule.tweetsPage,className) }>
            <ul>
                {tweetsHTML}
            </ul>
        </div>
    );

    //return ( <div className= {`tweetsPage ${className}`}>
    //            <ul>
    //                {tweetsHTML}
    //            </ul>
    //        </div>);


};

 export default TweetsPage;




//async function obtain () {
//    const datosEnvueltos =  await getTweets();
//    console.log('datosEnvueltos.data', datosEnvueltos.data);
//    const mostrarTweetsConLi = datosEnvueltos.data.map((valor) => {
//        return <li>{valor}</li>
//    });
//    console.log('mostrarTweetsConLi', mostrarTweetsConLi);
//}
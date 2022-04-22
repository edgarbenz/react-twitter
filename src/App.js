import './App.css';
import { TweetsPage, TweetDetailPage, NewTweetPage } from './components/tweets';
import LoginPage from './components/auth/LoginPage/LoginPage'
import Button from './components/shared/Button';
import Layout from './components/layout/Layout';
import React from 'react';
//import asiFuncionaAxios from '../src/api/pruebaConexion';

function App() {
  //asiFuncionaAxios();

  const [isLogged,setIsLogged] = React.useState(false);
 console.log('el estado isLogged en App.js= ',isLogged);

  const handleSetIsLogged = yesOrNot => setIsLogged(yesOrNot);

  return (
    <div className="App">
      {isLogged ? ( <TweetsPage isLogged/>  ) : ( <LoginPage handleSetIsLogged= {handleSetIsLogged}/> )  }
    </div>
  );
}
export default App;
//function App() {
//  const [titulo, setTitulo] = React.useState('');
//
//  const handleMount = title => setTitulo(title);
//  return (
//    <div className="App">
//      <Layout title = {titulo}>
//        <TweetsPage onMount= {handleMount} />
//        <TweetDetailPage  />
//        <NewTweetPage  />
//      </Layout>
//    </div>
//  );
//}



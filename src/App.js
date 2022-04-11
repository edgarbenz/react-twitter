import './App.css';
import { TweetsPage, TweetDetailPage, NewTweetPage } from './components/tweets';
import LoginPage from './components/auth/LoginPage/LoginPage'
import Button from './components/shared/Button';
import Layout from './components/layout/Layout';
import React from 'react';

function App() {

  return (
    <div className="App">
      <LoginPage>

      </LoginPage>
    </div>
  );
}

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

export default App;

import './App.css';
import TweetsPage from './components/tweets/TweetPage'
import Button from './components/shared/Button'

function App() {
  return (
    <div className="App">
      <Button variant="primary">Log in</Button>
      <TweetsPage className="page" />
    </div>
  );
}

export default App;

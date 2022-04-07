import './App.css';
import { TweetsPage, TweetDetailPage, NewTweetPage } from './components/tweets';
import Button from './components/shared/Button';

function App() {
  return (
    <div className="App">
      <TweetsPage  />
      <TweetDetailPage  />
      <NewTweetPage  />
    </div>
  );
}

export default App;

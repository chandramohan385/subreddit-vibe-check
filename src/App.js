import './App.css';
import SubRedditVibeChecker from "./components/SubRedditVibeChecker"

function App() {
  return (
    <div className="App">
      <h1 className="app-title">📡 Subreddit Vibe Check</h1>
      <p className="app-subtitle">Analyze the sentiment of any subreddit's top posts</p>
      <SubRedditVibeChecker />
    </div>
  );
}

export default App;

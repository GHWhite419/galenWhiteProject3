import BookInfo from './components/BookInfo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <h1>Welcome to the foreign language library! What kind of book can I find you?</h1>
          <BookInfo />
        </div>
      </main>
    </div>
  );
}

export default App;

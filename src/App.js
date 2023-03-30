import BookInfo from './components/BookInfo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <h1>Welcome to the Polyglot library!</h1>
          <BookInfo />
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>Designed by Galen White 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

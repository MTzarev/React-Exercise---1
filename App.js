
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Simple Calculator</h1>
      </header>
      <main>
        <h2>Calculate</h2>
        <TodoList />
      </main>
      <footer>
        <p>All right reserved &copy;</p>
      </footer>
    </div>
  );
}

export default App;

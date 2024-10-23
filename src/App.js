import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import MainPage from './components/MainPage';

function App() {
  // jsx
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <MainPage /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;

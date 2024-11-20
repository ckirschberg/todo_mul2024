import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import MainPage from './components/MainPage';
import LikeCounter from './components/LikeCounter';
import MyModal from './components/MyModal';
import Signup from './components/Signup';
import AddTodo from './components/AddTodo';

function App() {
  // jsx
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Signup />

        {/* <LikeCounter />
        <MyModal /> */}
        {/* <MainPage /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;

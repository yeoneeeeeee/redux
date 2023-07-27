import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Navbar>
        <NavbarBrand href="/">HOME</NavbarBrand> {/*링크 태그 혹은 앵커태그와 같은 역할함.*/}
        <NavbarBrand href="/todoList">TodoList</NavbarBrand>
        <NavbarBrand href="/counter">counter</NavbarBrand>
      </Navbar>
    <div className='container'>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
    </div>

      {/* <Counter/>
      <TodoList/> */}
      
    </Router>
  );
}

export default App;

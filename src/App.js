import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import NotFound from './NotFound/NotFound';
import Portfolio from './Portfolio/Portfolio';
import Login from './Login/Login';
import Register from './Register/Register'
import RequireAuth from './RequireAuth/RequireAuth';
import Purchase from './Purchase/Purchase';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;

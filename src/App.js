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
import DashBoard from './DashBoard/DashBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './DashBoard/MyOrders';
import AddReview from './DashBoard/AddReview';
import MyProfile from './DashBoard/MyProfile';
import Payment from './DashBoard/Payment';
import ManageOrder from './DashBoard/ManageOrder'
import RequireAdmin from './RequireAdmin/RequireAdmin';
import AddProduct from './DashBoard/AddProduct';
import MakeAdmin from './DashBoard/MakeAdmin';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       <Route path='/MyPortfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       {/* <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}></Route> */}
       <Route path="dashboard" element={<RequireAuth><DashBoard /></RequireAuth>} >
       <Route index  element={<MyProfile></MyProfile>}></Route>
       <Route path="myprofile"  element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<RequireAuth> <MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path="review" element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
        
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
           <Route path="manageOrder" element={<RequireAdmin> <ManageOrder></ManageOrder> </RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route> 
        </Route>

       <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

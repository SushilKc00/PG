
import './App.css'

import Home from './DisplayScreen/Home'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from './DisplayScreen/Login'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './DisplayScreen/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './DisplayScreen/MyOrder';

function App() {
 

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/login" element={<Login/>}/>
          <Route exact path ="/signup" element={<Signup/>}/>
          <Route exact path ="/myOrder" element={<MyOrder/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App

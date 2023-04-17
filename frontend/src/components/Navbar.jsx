import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from '../Modal';
import Cart from '../DisplayScreen/Cart';
import { useCart } from './ContextReducer';
import {motion, spring} from "framer-motion"

const Navbar = () => {
const data =useCart()
  const [cartView,setCartView] =useState(false);
  const navigate =useNavigate();
  const handleLogout =()=>{
localStorage.removeItem("authToken")
navigate("/login")
  }
  return (

    
    <div>

<motion.nav className="navbar navbar-expand-lg navbar-dark bg-success" initial={{y:-250}} animate={{y:0}} transition={{
      delay:.1,
      duration:1,
      yoyo: Infinity,
      }}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">PG Life</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        
        {(localStorage.getItem("authToken")) ?
        <li className="nav-item">
          <Link className="nav-link active fs-5 " aria-current="page" to="/myOrder">My Bookings</Link>
        </li>  :""} 
      
      </ul>
      {(!localStorage.getItem("authToken"))?

      <div className="d-flex">

      
          <Link className="btn bg-white text-danger mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-danger mx-1" to="/signup">Signup</Link>
        
      </div>:
      <>
      <div className="btn bg-white text-danger mx-2" onClick={()=> {setCartView(true)}}>
      Cart {"  "}
      <Badge pill bg = "danger" > {data.length}</Badge>
      </div>
      {cartView ? <Modal onClose={()=>setCartView(false)}><Cart/> </Modal> : null}

      <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
      Logout</div></>}
    </div>
  </div>
</motion.nav>
    </div>
  )
}

export default Navbar
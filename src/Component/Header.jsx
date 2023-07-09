import React from 'react'
import img4 from '../Image/Cloth/garMain.jpg'
import img5 from '../Image/Electronic/elcMain.jpg'
import img6 from '../Image/Furniture/furMain.jpg'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Garments from './garments/Garments'
import Electronic from './electronic/Electronics'
import Furniture from './furniture/Furniture'
import Login from './Login'
import SignUp from './Signup'
function Header() {
  const Navigate = useNavigate()
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-10">
            <nav id="menu_bar">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </nav>
          </div>
          <div class="col-sm-2">
            <button
              class="btn btn-danger"
              onClick={() => {
                Navigate('/Login')
              }}
            >
              Login
            </button>
            <button
              class="btn btn-danger"
              onClick={() => {
                Navigate('/SignUp')
              }}
            >
              SignUp
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <img src={img4} alt="glogo"></img>
            <button
              class="btn btn-info"
              onClick={() => {
                Navigate('/Garments')
              }}
            >
              MoveToGarments Page
            </button>
          </div>
          <div class="col-sm">
            <img src={img5} alt="Elogo"></img>
            <button
              class="btn btn-info"
              onClick={() => {
                Navigate('/Electronics')
              }}
            >
              MoveToElectronics Page
            </button>
          </div>
          <div class="col-sm">
            <img src={img6} alt="Flogo"></img>
            <button
              class="btn btn-info"
              onClick={() => {
                Navigate('/Furniture')
              }}
            >
              MoveToFurniture Page
            </button>
          </div>
        </div>
      </div>
      <div className="Main">
        <Routes>
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/Garments" element={<Garments />}></Route>
          <Route path="/Electronics" element={<Electronic />}></Route>
          <Route path="/Furniture" element={<Furniture />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}
export default Header

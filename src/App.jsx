import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from './component/Footer'
import './App.css'
import Contactus from './page/Contacus'
import Home from './page/Home'
import Ternant from './page/Ternant'
import Landlord from './page/Landlord'
import Navz from './component/Nav'

function App() {
  

  return (
    <>
      



   <div className="App">
   
        <div className='master-body'>
          <Navz/>
          
        <Routes>
            <Route path='/' element={<Home/>}>

            </Route>
            <Route path='/Home' element={<Home/>}>

            </Route>
            <Route path='/Landlord' element={<Landlord/>}>

            </Route>
            <Route path='/Ternant' element={<Ternant/>}>

            </Route>
            <Route path='/Contactus' element={<Contactus/>}>

            </Route>
            
           
           
        </Routes>
        <Footer/>
        
        </div>
   


   </div>

      
    </>
  )
}

export default App

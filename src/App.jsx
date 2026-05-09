import React from 'react'
import Navbar from  "../src/components/Navbar.jsx"
import Hero from "../src/components/Hero.jsx"
import Categories from "../src/components/Categories.jsx"
import { BrowserRouter, Router , Routes , Route } from 'react-router-dom';
import Products from './pages/Products.jsx'
import Home from './pages/Home.jsx';

function App() {
  return (
     <>
      
        
        

        <BrowserRouter>
         {/* <Home/> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            
          </Routes>
        </BrowserRouter>
     </>
  )
}

export default App
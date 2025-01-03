import { useState } from 'react'
import './App.css'
import Main from './pages/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FilterProducts from './components/FilterProducts'
import SingleProduct from './components/SingleProduct'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'
      element={<Main/>}>
    </Route>
    <Route path='/filterProducts/:type' element={<FilterProducts/>}></Route>

    
    <Route path='/filterProducts/:type/:id' element={<SingleProduct/>}></Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}


export default App

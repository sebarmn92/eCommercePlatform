
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home'
import Navigation from './routes/navigation/navigation'
import SignIn from './routes/signin/signin.jsx'



const Shop = () => {

  return (
    <h1>I am the shop page</h1>
  )
}

function App() {


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='signIn' element={<SignIn />}/>
      </Route> 
      
    </Routes>
      
   
  )
}

export default App

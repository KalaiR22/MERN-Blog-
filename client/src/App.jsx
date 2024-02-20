import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from "./Pages/About"
import Dashboard from './Pages/Dashboard'
import Products from './Pages/Products'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Header from './componenets/Header'
import './App.css'
function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/dashboard' element={<Dashboard/>}/>
      <Route  path='/products' element={<Products/>}/>
      <Route  path='/sign-in' element={<Signin/>}/>
      <Route  path='/sign-up' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

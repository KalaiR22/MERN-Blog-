import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from "./Pages/About"
import Dashboard from './Pages/Dashboard'
import Products from './Pages/Products'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Header from './componenets/Header'
import FooterCom from './componenets/FooterCom'
import './App.css'
import PrivateRoute from './componenets/PrivateRoute'
import OnlyAdminRoute from './componenets/OnlyAdminRoute'
import CreatePost from './Pages/CreatePost'
function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route element={<PrivateRoute/>}>
        <Route  path='/dashboard' element={<Dashboard/>}/>
      </Route>
       <Route element={<OnlyAdminRoute/>}>
        <Route  path='/createpost' element={<CreatePost/>}/>
      </Route>
      <Route  path='/products' element={<Products/>}/>
      <Route  path='/sign-in' element={<Signin/>}/>
      <Route  path='/sign-up' element={<Signup/>}/>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
    
   
  )
}

export default App

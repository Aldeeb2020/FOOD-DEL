import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx';
import AppDownload from './components/AppDownload/AppDownload.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';
export const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
    <div className='app'>
      <Navbar showLogin={showLogin} onShowLogin={setShowLogin}/>
      <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='order' element={<PlaceOrder/>}></Route>
      </Routes>
      <AppDownload/>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App;
import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyOrder from './pages/MyOrder';
import PageNotFound from "./pages/PageNotFound";
import { Provider } from "react-redux";
import store from "../redux/store";
const App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/orders" element={<MyOrder/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Provider>
</>
  )
}

export default App

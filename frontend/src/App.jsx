import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Product from "./components/products/Product"
import Cart from "./components/cart/Cart"
import Navbar from "./components/layouts/Navbar"
import Register from "./components/user/Register"


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/products/category/:category_id" element={<Home />} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register/>} />



    </Routes>
    </BrowserRouter>
  )
}

export default App

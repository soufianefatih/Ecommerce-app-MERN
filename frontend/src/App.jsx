import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/layouts/Header"
import Home from "./components/Home"
import Product from "./components/products/Product"
import Cart from "./components/cart/Cart"
import Carsoul from "./components/layouts/Carsoul"


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Carsoul/>

    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/products/category/:category_id" element={<Home />} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App

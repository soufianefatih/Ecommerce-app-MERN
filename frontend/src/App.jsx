import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/layouts/Header"
import Home from "./components/Home"
import Product from "./components/products/Product"


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/products/category/:category_id" element={<Home />} />
      <Route path="/products/:id" element={<Product/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/layouts/Header"
import Home from "./components/Home"


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} />
    </Routes>
  
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

function App() {
return (
  <BrowserRouter>
  <Navbar/>
  <Footer>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/ProductCard" element={<ProductCard/>}/>
    <Route path="/ProductList" element={<ProductList/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/ProductDetails" element={<ProductDetails/>}/>
    <Route
  path="/checkout"element={<ProtectedRoute><Checkout /></ProtectedRoute> }/>
  </Routes>
  </Footer>
  </BrowserRouter>
)
}
export default App;
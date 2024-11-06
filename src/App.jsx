import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productdetails/ProductDetails";
// import Form from "./components/form/Form";
// import AboutHook from "./components/aboutHook/AboutHook";
// import Api from "./components/api/Api";
function App() {
  return (
    <>
      {/* <Form />
    <Navbar />
    <Home />
    <About />
    <AboutHook />
    <Api /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

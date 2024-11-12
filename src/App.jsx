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
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardComponent from "./components/dashboardComponent/DashboardComponent";
import Users from "./pages/users/Users";
import Profile from "./pages/profile/Profile";
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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardComponent />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

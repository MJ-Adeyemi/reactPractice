import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
      </BrowserRouter>
    </>
  );
}

export default App;

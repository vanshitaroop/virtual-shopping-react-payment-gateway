
import './App.css';
import Homepage from './components/Homepage';
import { useEffect } from 'react';
import Produnct from './components/Produnct';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Contact from './components/Contact';
import {
  
  Route,
  Routes
} from "react-router-dom";
function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};

useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
});

  return (
<>
<Navbar/>
   <Routes>
   <Route exact  path="/" element={<Homepage/>}/>
   <Route exact  path="/product" element={<Produnct/>}/>
   <Route exact path="/contact" element={<Contact/>}/>
 </Routes>
 <Footer/>
</>
  );
}

export default App;

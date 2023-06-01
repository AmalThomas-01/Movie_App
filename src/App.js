import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/pricing";
import About from "./pages/about";
import LoginPage from "./pages/LoginPage";

function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  
    return (
      <div className="App">
        <BrowserRouter>
          {loading ? (
            <div className="flex justify-center "><div className="text-white text-3xl">Movie Booking Site</div></div>
          ) : (
            <><Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} exact />
                <Route path={"/about"} element={<About />} exact />
                <Route path={"/pricing"} element={<Pricing />} exact />
                <Route path={"/loginpage"} element={<LoginPage />} exact />
            </Routes></>
          )}
        </BrowserRouter>
      </div>
    );
  }
  
export default App;

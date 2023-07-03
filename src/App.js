import React from "react";
import "./App.css";

import Logo from "./components/Logo";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className='container'>
      <Logo />
      <Product />
      <Banner />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;

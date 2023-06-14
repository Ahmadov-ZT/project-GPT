import React from "react";
import "./App.css"
 
import {
  Blog,
  Featuers,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";

function App() {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Featuers />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./index.css";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  return <>
  <Nav/> 
  {/* <Header/> */}
  <main>
    <Outlet/>
  </main>
  <Footer/>
  </>
}

export default App;

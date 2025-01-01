/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import './Layout.css';

function Layout() {
  return (
    <div>
      <div className="bg-gray-dark">
        <Navbar/>
      </div>

      <main className="bg-gray-light">
        <Outlet />
      </main>

      <div className="bg-gray-dark">
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;

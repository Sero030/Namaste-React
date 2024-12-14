import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

root.render(<AppLayout />);

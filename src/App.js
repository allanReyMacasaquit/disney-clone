import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

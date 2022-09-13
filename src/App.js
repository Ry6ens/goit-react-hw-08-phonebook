import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

import { Container } from "./components/Container/Container";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

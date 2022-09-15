import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import PrivateRoute from "./services/PrivateRoute/PrivateRoute";
import PublicRoute from "./services/PublicRoute/PublicRoute";

import { Container } from "./components/Container/Container";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts/Contacts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import Cabinet from "./pages/Cabinet";
import { getCurrent } from "./redux/auth/auth-operations";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <div className="backdrop">
    // {/* <div className="backdropGradient"> */ }
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cabinet" element={<Cabinet />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Container>
    </>

    // </div>
    // </div>
  );
}

export default App;

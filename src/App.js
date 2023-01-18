import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import Pago from "./components/Checkout/Pago";
//import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/authContext";
//import Pago from "./components/Checkout/Pago";
import Homep from "./components/Home/Homep";
import PerfilP from "./components/Perfil/PerfilP";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoutes>
              <Homep />
              //</ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/Pago" element={<Pago />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Perfil" element={<PerfilP/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

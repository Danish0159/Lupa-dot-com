import React from "react";
import { Login } from "../Components";
import { NavbarLogin } from "../Components/Navigations";

const LoginPage = () => {
  return (
    <main>
      <NavbarLogin></NavbarLogin>
      <Login></Login>
    </main>
  );
};

export default LoginPage;

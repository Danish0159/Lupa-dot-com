import React from "react";
import { Signup } from "../Components";
import { NavbarSignUp } from "../Components/Navigations";

const SignupPage = () => {
  return (
    <main>
      <NavbarSignUp></NavbarSignUp>
      <Signup></Signup>
    </main>
  );
};

export default SignupPage;

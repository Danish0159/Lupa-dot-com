import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Shared/Styles";
import ErrorPage from "./utils/ErrorPage";

import { LoginPage, SignupPage, HomePage, HotelPage, ListPage } from "./Pages";

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            {/* ----------------------------------------------- */}
            {/* Cannot Access login+SignUp Page If user is already loggedIn */}
            {/* <PrivateWithUserEn
                exact
                path="/Login"
                component={LoginPageEn}
              ></PrivateWithUserEn>

              <PrivateWithUserEn
                exact
                path="/Signup"
                component={SignupPageEn}
              ></PrivateWithUserEn> */}

            <Route exact path="/">
              <LoginPage></LoginPage>
            </Route>
            <Route exact path="/SignUp">
              <SignupPage></SignupPage>
            </Route>
            <Route exact path="/HomePage">
              <HomePage></HomePage>
            </Route>
            <Route exact path="/hotels">
              <ListPage></ListPage>
            </Route>
            <Route exact path="/hotels/:id">
              <HotelPage></HotelPage>
            </Route>
            <Route exact path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;

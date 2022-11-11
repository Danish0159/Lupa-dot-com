import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
// import signupImage from "../images/signup.png";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUserEn } from "../Features/user/userSlice";
import { styles } from "../Shared/Styles";

const initialState = {
  name: "",
  email: "",
  password: "",
  role: "",
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  // const {  isSuccess } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = values;
    if (!name || !email || !password || !role) {
      toast.error("Please fill out all fields");
      return;
    }
    if (password.length < 8) {
      toast.error("Password is too short - should be 8 chars minimum.");
      return;
    }
    dispatch(registerUserEn({ name, email, password, role }));
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     history.push("/Login");
  //     // dispatch(reset());
  //   }
  //   // eslint-disable-next-line
  // }, [isSuccess]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <Wrapper>
      <div className="signup__grid">
        <figure className="signup__div">
          <img
            className="signup__img"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt="SignUp"
          />
        </figure>
        <form onSubmit={onSubmit} className="signup__form">
          <h2 className="signup__title">Register</h2>
          <p className="signup__subTitle">Please register your account.</p>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <TextField
              fullWidth
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <TextField
              fullWidth
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextField
              fullWidth
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>

          <button type="submit" className="blue-btn submit-button">
            Register
          </button>

          <p className="signup__dont">
            Already have an account?
            <span className="signup__register">
              {" "}
              <Link to="/">
                <u>Log In Now</u>
              </Link>{" "}
            </span>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.section`
  background-color: #003580;
  min-height: calc(100vh - 60px);
  padding: 2.5rem 1.8rem 3.1rem 1.8rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 850px) {
    padding: 1.8rem 1.2rem 3.1rem 1.2rem;
  }
  .signup__grid {
    max-width: 67.5rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 6.8rem;
    align-items: center;
  }
  @media only screen and (max-width: 850px) {
    .signup__grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      max-width: 100%;
      grid-gap: 3.75rem;
    }
  }
  .signup__div {
    width: 90%;
  }
  .signup__img {
    height: 330px;
    width: 100%;
    display: block;
  }
  @media only screen and (max-width: 1065px) {
    .signup__img {
      height: 100%;
    }
    .signup__div {
      width: 100%;
    }
  }
  form {
    background-color: white;
    padding: 1.6rem 3.7rem;
    border-radius: 20px;
    /* width: 100%; */
    @media only screen and (max-width: 1000px) {
      padding: 1.6rem 2.5rem;
    }
    @media only screen and (max-width: 850px) {
      padding: 1.6rem 1.2rem;
    }
  }
  .signup__title {
    font-family: "Roboto", sans-serif;
    font-size: 2.25rem;
    font-weight: 900;
    color: var(--clr-black);
    margin-bottom: 0.3rem;
  }
  .signup__subTitle {
    font-size: 1.2rem;
    color: var(--clr-black);
    margin-bottom: 2.1rem;
  }
  label {
    display: flex;
    align-items: center;
    color: #2a2a2a;
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
  .form-group {
    margin: 0 auto 1rem auto;
    padding: 0.15rem;
  }
  .signup__dont {
    text-align: center;
    margin-top: 1.2rem;
    font-size: 1rem;
  }
  .signup__register {
    color: var(--clr-blue-2);
  }
  .error-p {
    padding: 0px 0px 0px 3px;
    margin: 0px;
    font-size: 15px;
    color: red;
    height: 5px;
  }
`;

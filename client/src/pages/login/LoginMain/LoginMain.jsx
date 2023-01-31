import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext'
import { TextField } from "@mui/material";
import { styles } from "../../../Shared/Styles";
import "./loginmain.css";
import { Link } from "react-router-dom";
import AbsoluteSpinner from "../../../components/AbsoluteSpinner";
// import { getUserFromLocalStorage } from "../utils/localStorage";
// import { toast } from "react-toastify";
// import Spinner from "./Spinner";

const LoginMain = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://fypbookingbea.adaptable.app/api" + "/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  // const { isLoading } = useSelector(
  //   (state) => state.user
  // );
  // const user = getUserFromLocalStorage();
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const { email, password } = values;
  //   if (!email || !password) {
  //     // toast.error("Please fill out all fields");
  //     return;
  //   }
  //   if (password.length < 8) {
  //     // toast.error("Password is too short - should be 8 chars minimum.");
  //     return;
  //   }
  //   // dispatch(loginUserEn({ email, password }));
  // };
  // useEffect(() => {
  //   if (user && user.profile) {
  //     history.push("/Profile");
  //   } else if (user && !user.profile) {
  //     history.push("/joinus");
  //   }
  //   // eslint-disable-next-line
  // }, [user]);

  if (loading) {
    return <AbsoluteSpinner />;
  }
  return (
    <section className="login__section">
      <div className="login__grid">
        <figure className="login__div">
          <img
            className="login__img"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt="login-img"
          />
        </figure>

        <form className="login__form">
          <h2 className="login__title">Welcome</h2>
          <p className="login__subTitle">Please login to your account.</p>

          <div className="form-group">
            <label htmlFor="email">Name</label>
            <TextField
              fullWidth
              type="text"
              placeholder="username"
              id="username"
              name="username"
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
              placeholder="password"
              id="password"
              onChange={handleChange}
              inputProps={{
                style: styles.textField,
              }}
            />
          </div>

          <button disabled={loading} onClick={handleClick} type="submit" className="blue-btn submit-button">
            LOGIN
          </button>
          {error && <div className="error-p">{error.message}</div>}
          <p className="login__dont">
            Don’t have an account?
            <span className="login__register">
              {" "}
              <Link to="/signup">
                <u>Register Now</u>
              </Link>{" "}
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginMain;

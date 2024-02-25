import { Link } from "react-router-dom";
import emailIcon from "../../assets/icons/email.png";
import passwordIcon from "../../assets/icons/password.png";

function GetStartedForm() {
  return (
    <div className="border-2 ">
      <form
        name="login"
        action="mailto:khaleedopeloyeru20@gmail.con"
        method="post"
        className="get-started-form"
      >
        <h2>Sign Up</h2>
        <div className="main-container">
          <label htmlFor="email" className="container">
            Email
            <br />
            <div className="input-container">
              <input type="email" name="email" id="email" />
              <img src={emailIcon} />
            </div>
          </label>
        </div>

        <div className="main-container">
          <label htmlFor="password" className="container">
            Password
            <br />
            <div className="input-container">
              <input type="password" name="password" id="password" />
              <img src={passwordIcon} />
            </div>
          </label>
        </div>

        <div className="remember-and-forgot">
          <label htmlFor="remember-me">
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              value="remember-me"
            />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <Link to="/selection">login</Link>
        {/* <input type="submit" value="Log in" className="login-button" /> */}
        <p className="register-button">
          Don't have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
}

export default GetStartedForm;

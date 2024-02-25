import { Link } from "react-router-dom";
// import emailIcon from "../../assets/icons/email.png";
// import passwordIcon from "../../assets/icons/password.png";
import "./GettingStartedForm.css";

function GetStartedForm() {
  return (
    <div className="basis-96 grow flex  items-center justify-center">
      <form
        name="login"
        action="mailto:khaleedopeloyeru20@gmail.con"
        method="post"
        className=" w-full h-full flex flex-col gap-8 items-center justify-center "
      >
        <h1 className="font-bold text-3xl ">
          Let's Get You Started{" "}
        </h1>

        <div className="flex justify-between w-full gap-6">
          <input
            type="text"
            name="firstName"
            id="email"
            className=" bg-light-purple grow min-h-11 rounded-md outline-none border-none pl-10"
            placeholder="First name"
          />{" "}
          <input
            type="text"
            name="lastName"
            id="email"
            className=" bg-light-purple grow min-h-11 rounded-md outline-none border-none pl-10"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className=" bg-light-purple w-full min-h-11 rounded-md outline-none border-none pl-10"
          placeholder="Email Address"
        />

        <input
          type="password"
          name="password"
          id="password"
          className=" bg-light-purple w-full min-h-11 rounded-md outline-none border-none pl-10"
          placeholder="Password"
        />

        <Link to="/selection" className="purple-text">
          <button className="bg-first-green p-4 text-white font-bold">
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
}

export default GetStartedForm;

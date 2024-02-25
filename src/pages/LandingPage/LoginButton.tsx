import { Link } from "react-router-dom";

function GetStartedButton() {
  return (
    <>
      <Link
        to="/getstarted"
        className="bg-first-green rounded-md w-[40%] flex justify-center items-center"
      >
        <button className="p-2  font-bold  text-lg text-white rounded-sm">
          Get Started
        </button>
      </Link>
    </>
  );
}

export default GetStartedButton;
import { Link } from "react-router-dom";
import WordMark from "../../pages/LandingPage/WordMark";
function GetStartedNavBar() {
  return (
    <div className="flex justify-center items-center w-full bg-[#E6E6FA]">
      <nav className="flex justify-between items-center max-w-7xl w-full p-4 max-sm:justify-center">
        <WordMark />
        <Link
          to="/login"
          className=" w-32 max-sm:hidden rounded-md flex justify-center items-center"
        >
          <button className="p-2 bg-first-green font-bold text-lg text-white rounded-md">
            Log in
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default GetStartedNavBar;

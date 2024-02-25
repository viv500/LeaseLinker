import { Link } from "react-router-dom";
import WordMark from "./WordMark";
function NavBar() {
  return (
    <div className="flex justify-center items-center w-full bg-black">
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

export default NavBar;

import { Link } from "react-router-dom";
import errorImage from "../../assets/images/error.png";

function Error() {
  return (
    <div className="grow flex items-center justify-center flex-col p-10 gap-6">
      <div className="max-w-xl">
        <img src={errorImage} />
      </div>
      <Link
        to="/"
        className="bg-first-green rounded-md max-w-56 flex justify-center items-center"
      >
        <button className="p-2  font-bold  text-lg text-white rounded-sm">
          Return Home
        </button>
      </Link>
    </div>
  );
}

export default Error;

import { Link } from "react-router-dom";

function WordMark() {
  return (
    <div className="flex items-center">
      <Link to="/">
        <p className=" text-4xl font-bold text-first-green">LeaseLinker</p>
      </Link>
    </div>
  );
}

export default WordMark;

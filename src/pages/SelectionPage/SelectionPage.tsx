import { useState } from "react";
import { Link } from "react-router-dom";
import WordMark from "../LandingPage/WordMark";

const provinces = [
  "province",
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const SelectionPage = () => {
  const [currentCity, setCurrentCity] = useState("");
  const [currentProvince, setCurrentProvince] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newProvince, setNewProvince] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", {
      currentCity,
      currentProvince,
      newCity,
      newProvince,
    });
  };

  return (
    <div className="flex min-h-lvh justify-center items-center flex-col">
      <div className="flex justify-center items-center w-full bg-[#E6E6FA]">
        <nav className="flex items-center max-w-7xl w-full p-4 justify-center">
          <WordMark />
        </nav>
      </div>
      <div className="grow border border-red-400 w-full flex">
        <form
          onSubmit={handleSubmit}
          className="border border-blue-600 flex w-full items-center justify-center flex-col"
        >
          <input
            type="text"
            id="currentCity"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            placeholder="city"
          />

          <select
            id="currentProvince"
            value={currentProvince}
            onChange={(e) => setCurrentProvince(e.target.value)}
          >
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>

          <label htmlFor="newCity">Your Future City:</label>
          <input
            type="text"
            id="newCity"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />

          <label htmlFor="newProvince">Your Future Province:</label>
          <select
            id="newProvince"
            value={newProvince}
            onChange={(e) => setNewProvince(e.target.value)}
          >
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          <Link to="/listings">
            <button type="submit">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SelectionPage;

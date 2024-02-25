import { useState } from "react";
import "./selection-page.css"; // Import the CSS file

const provinces = [
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
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="currentCity">Your City:</label>
          <input
            type="text"
            id="currentCity"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentProvince">Your Province:</label>
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
        </div>

        <div className="form-group">
          <label htmlFor="newCity">Your Future City:</label>
          <input
            type="text"
            id="newCity"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
        </div>

        <div className="form-group">
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
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SelectionPage;
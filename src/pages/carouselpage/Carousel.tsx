import { useState } from "react";
import { CarouselItem } from "./CarouselItem";

import "./carousel.css";

import house1 from "../../assets/images/houses/building (1).jpg";
import house2 from "../../assets/images/houses/building (2).jpg";
import house3 from "../../assets/images/houses/building (3).jpg";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "house1",
      icon: house1,
      price: 150000,
      noOfBedrooms: 2,
      noOfBathrooms: 1,
      amenities: "Pool, Gym, Garage",
    },
    {
      title: "house2",
      imageSrc: house2,
      price: 200000,
      noOfBedrooms: 4,
      noOfBathrooms: 3,
      amenities: "Garden, Garage",
    },
    {
      title: "house2",
      imageSrc: house3,
      price: 150000,
      noOfBedrooms: 2,
      noOfBathrooms: 1,
      amenities: "Pool, Gym",
    },
  ];
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

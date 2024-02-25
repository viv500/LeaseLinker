import React, { useEffect, useState, useCallback } from "react";

const Listing: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = useCallback(() => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    let newIndex = slideIndex + 1;
    if (newIndex > slides.length) {
      newIndex = 1;
    }
    setSlideIndex(newIndex);
    for (let i = 0; i < dots.length; i++) {
      (dots[i] as HTMLElement).className = (
        dots[i] as HTMLElement
      ).className.replace(" active", "");
    }
    (slides[newIndex - 1] as HTMLElement).style.display = "block";
    (dots[newIndex - 1] as HTMLElement).className += " active";
  }, [slideIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 2000);

    return () => clearInterval(interval);
  }, [showSlides]);

  return (
    <div>
      <div className="Title">LeaseLinker</div>
      <p>Searching for houses in your desired area...</p>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="https://a0.muscache.com/im/pictures/monet/Luxury-736940503519190941/original/9e0cab4e-cef0-49b2-82c9-4b24d15131ea?im_w=1200"
            style={{ width: "100%" }}
            alt="slide 1"
          />
          <div className="address">12 King Street</div>
          <div className="bedbath">3 Bed, 2 Bath</div>
          <div className="price">$100,000</div>
        </div>

        {/* Repeat for other slides */}
      </div>
      <br />

      <a
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png"
        className="checkbutton"
      >
        {/* Add any content for the check button */}
      </a>
      <a
        href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Cross_red_circle.svg/2048px-Cross_red_circle.svg.png"
        className="xbutton"
      >
        {/* Add any content for the X button */}
      </a>
      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Listing;

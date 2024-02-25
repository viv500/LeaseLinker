export const CarouselItem = ({ item, width }: any) => {
  return (
    <div
      className="carousel-item border border-red-700"
      style={{ width: width }}
    >
      <img className="carousel-img" src={item.icon} />
      <div>
        <div className="carousel-item-text">{item.price}</div>
        <div className="carousel-item-text">{item.noOfBedrooms}</div>
        <div className="carousel-item-text">{item.noOfBathrooms}</div>
        <div className="carousel-item-text">{item.amenities}</div>
      </div>
    </div>
  );
};

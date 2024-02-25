// import Listing from "./Listing";
// import house1 from "../../../src/assets/images/houses/building (1).jpg";
// import house2 from "../../../src/assets/images/houses/building (2).jpg";
// import house3 from "../../../src/assets/images/houses/building (3).jpg";
// import house4 from "../../../src/assets/images/houses/building (1).jpeg";
import { Carousel } from "../carouselpage/Carousel";
import GetStartedNavBar from "../GetStartedPage/GetStartedNavBar";
// const listings = [
//   {
//     imageSrc: house1,
//     price: 100000,
//     noOfBedrooms: 3,
//     noOfBathrooms: 2,
//     amenities: "Pool, Gym, Garage",
//   },
//   {
//     imageSrc: house2,
//     price: 200000,
//     noOfBedrooms: 4,
//     noOfBathrooms: 3,
//     amenities: "Garden, Garage",
//   },
//   {
//     imageSrc: house3,
//     price: 150000,
//     noOfBedrooms: 2,
//     noOfBathrooms: 1,
//     amenities: "Pool, Gym",
//   },
//   {
//     imageSrc: house4,
//     price: 150000,
//     noOfBedrooms: 2,
//     noOfBathrooms: 1,
//     amenities: "Pool, Gym, Garage",
//   },
// ];

function ListingsPage() {
  return (
    <div className="flex items-center justify-center min-h-lvh flex-col">
      <GetStartedNavBar />
      <div className="flex gap-4 border border-green-800 h-full grow flex-col">
        <Carousel />
        <Carousel />
        {/* {listings.map(
          ({ imageSrc, price, noOfBedrooms, noOfBathrooms, amenities }) => {
            return (
              <Listing
                imageSrc={imageSrc}
                price={price}
                noOfBedrooms={noOfBedrooms}
                noOfBathrooms={noOfBathrooms}
                amenities={amenities}
              />
            );
          }
        )} */}
      </div>
    </div>
  );
}

export default ListingsPage;

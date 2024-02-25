import Cancel from "../../assets/icons/Cancel";
import Heart from "../../assets/icons/Heart";
import type { ListingProps } from "../../types/types";
function Listing({
  amenities,
  imageSrc,
  noOfBedrooms,
  noOfBathrooms,
  price,
}: ListingProps) {
  return (
    <div className="rounded-md min-h-lvh">
      <div className="rounded-md">
        <img src={imageSrc} />
      </div>
      <div>
        <p>
          {noOfBedrooms} Bed, {noOfBathrooms} Bath
        </p>
      </div>
      <div>{amenities}</div>
      <div>
        <p>{price}</p>
      </div>
      <div className="flex">
        <Cancel />
        <Heart />
      </div>
    </div>
  );
}

export default Listing;

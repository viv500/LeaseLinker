import React from "react";
import type { ListingProps } from "../../types/types";
function Listing({
  amenities,
  imageSrc,
  noOfBedrooms,
  noOfBathrooms,
  price,
}: ListingProps) {
  return (
    <div className="border border-red-800 rounded-md">
      <div className="rounded-md border-blue-600 border">
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
    </div>
  );
}

export default Listing;

import React, { useContext } from "react";
import pixaayContext from "../src/Context/PixaayContext";
const Images = () => {
  const { imageData } = useContext(pixaayContext);
  return (
    <div className="flex">
      {imageData.map((data) => (
        <div key={data.id}>
          <div className="items">
            <img src={data.largeImageURL} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;

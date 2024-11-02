import React, { useEffect, useState } from "react";
import pixaayContext from "./PixaayContext";
const PixaayState = (props) => {
  const apiKey = "40546310-c5dfe8c1ec45ecd8c9e718940";
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("hindu");

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&per_page=50`
      );
      const data = await api.json();
      setImageData(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (category) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${category}&image_type=photo&pretty=true&per_page=50`
    );
    const data = await api.json();
    setImageData(data.hits);
  };

  return (
    <pixaayContext.Provider
      value={{ imageData, fetchImageByCategory, setQuery }}
    >
      {props.children}
    </pixaayContext.Provider>
  );
};

export default PixaayState;

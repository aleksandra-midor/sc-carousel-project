import React from "react";
import Image from "../Image/Image";
import "./ThumbsGallery.scss";

const ThumbsGallery = (props) => {
  console.log(props);

  return (
    <ul className="ThumbsGallery">
      {props.data.photo.map((el, i) => (
        <li className="ThumbsGallery_Image" key={i}>
          <Image data={el}></Image>
        </li>
      ))}
    </ul>
  );
};

export default ThumbsGallery;

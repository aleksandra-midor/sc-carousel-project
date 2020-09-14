import React from "react";
import Image from "../Image/Image";
import "./ThumbsGallery.scss";

const ThumbsGallery = (props) => {
  console.log(props);

  return (
    <ul className="ThumbsGallery">
      {props.data.photo.map((el, i) => (
        <li key={i}>
          <div className="ThumbsGallery_Image" onClick = {() => {
            props.kupa(true)
            props.setPicture(i)
          }
        }>
          <Image data={el} ></Image>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ThumbsGallery;

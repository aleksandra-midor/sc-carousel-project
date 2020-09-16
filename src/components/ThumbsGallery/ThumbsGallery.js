import React from "react";
import Image from "../Image/Image";
import "./ThumbsGallery.scss";

const ThumbsGallery = (props) => {
  console.log(props);

  return (
    <ul className="ThumbsGallery">
      {props.data.map((el, i) => (
        <li key={i}>
          <button
            className="ThumbsGallery_Button"
            onClick={() => {
              props.kupa(true);
              props.setPicture(i);
            }}
          >
            <Image data={el}></Image>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ThumbsGallery;

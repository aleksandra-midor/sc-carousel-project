import React from "react";
import Image from "../Image/Image";

const ThumbsGallery = (props) => {
  console.log(props);

  return (
    <div className="ThumbsGallery">
      <ul>
        {props.data.photo.map((el, i) => (
          <li key={i}><Image data={el}></Image></li>
        
        ))}

      </ul>
    </div>
  );
};

export default ThumbsGallery;

import React from "react";

const ThumbsGallery = (props) => {
  console.log(props);

  return (
    <div className="ThumbsGallery">
      <ul>
        {props.data.photo.map((el, i) => (
          <li key={i}>{el.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThumbsGallery;

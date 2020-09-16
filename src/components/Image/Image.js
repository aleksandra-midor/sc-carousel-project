import React from "react";
import "./Image.scss";

const Image = (props) => {
  return (
    <div className="Image">
      <img
        src={`https://farm${props.data.farm}.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`}
        alt={`${props.data.title}`}
      />
    </div>
  );
};

export default Image;

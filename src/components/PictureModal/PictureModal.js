import React from "react";
import "./PictureModal.scss";

const PictureModal = (props) => {
  if (props.visible) {
    return (
      <div className="Modal">
        <div className="Modal_Inner">Modal</div>
      </div>
    );
  } else {
    return null
  }
};

export default PictureModal;

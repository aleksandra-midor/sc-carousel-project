import React from "react";
import "./PictureModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";

const PictureModal = (props) => {
  console.log(props);

  const nextPicture = () => {
    if (props.selectedPicture !==props.allPictures.length - 1) {
      props.setSelectedPicture(props.selectedPicture + 1);
    } else {
      props.setSelectedPicture(0)
    }
  };

  const prevPicture = () => {
    if (props.selectedPicture !==0) {
      props.setSelectedPicture(props.selectedPicture - 1);
    } else {
      props.setSelectedPicture(props.allPictures.length - 1)
    }
  }

  if (props.visible) {
    return (
      <div className="Modal">
        <div className="Modal_Inner">
          <button
            className="ModalClose"
            onClick={() => props.setVisible(false)}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <Image data={props.allPictures[props.selectedPicture]}></Image>

          <button onClick={prevPicture}>previouse</button>
          <button onClick={nextPicture}>next</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PictureModal;

// props.allPictures

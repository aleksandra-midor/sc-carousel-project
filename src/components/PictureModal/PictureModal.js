import React from "react";
import "./PictureModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import ThumbsGallery from "../ThumbsGallery/ThumbsGallery";

const PictureModal = (props) => {
  console.log(props);

  const nextPicture = () => {
    if (props.selectedPicture !== props.allPictures.length - 1) {
      props.setSelectedPicture(props.selectedPicture + 1);
    } else {
      props.setSelectedPicture(0);
    }
  };

  const prevPicture = () => {
    if (props.selectedPicture !== 0) {
      props.setSelectedPicture(props.selectedPicture - 1);
    } else {
      props.setSelectedPicture(props.allPictures.length - 1);
    }
  };

  if (props.visible) {
    console.log(props.allPictures[props.selectedPicture].id);
    return (
      <div className="Modal">
        <div className="Modal_Inner">
          <button
            className="ModalClose"
            onClick={() => props.setVisible(false)}
          >
            <FontAwesomeIcon icon={faTimes} size="3x" />
          </button>

          <div className="Modal_Image">
            <Image data={props.allPictures[props.selectedPicture]}></Image>
          </div>

          <div className="Carousel">
            <Image
              className="Carousel_Image"
              data={
                props.selectedPicture === 0
                  ? props.allPictures[props.allPictures.length - 1]
                  : props.allPictures[props.selectedPicture - 1]
              }
            ></Image>

            <Image
              className="Carousel_Image"
              data={props.allPictures[props.selectedPicture]}
            ></Image>

            <Image
              className="Carousel_Image"
              data={
                props.selectedPicture === props.allPictures.length - 1
                  ? props.allPictures[0]
                  : props.allPictures[props.selectedPicture + 1]
              }
            ></Image>

          <div className="Carousel_Buttons">
           
            <button onClick={prevPicture}><FontAwesomeIcon icon={faAngleLeft} size="10x" /></button>
            <button onClick={nextPicture}><FontAwesomeIcon icon={faAngleRight} size="10x" /></button>
          </div>

          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PictureModal;

// props.allPictures

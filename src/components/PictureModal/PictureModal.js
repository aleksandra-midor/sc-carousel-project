import React from "react";
import "./PictureModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image/Image'

const PictureModal = (props) => {
  console.log(props)
  if (props.visible) {
    return (
      <div className="Modal">
        <div className="Modal_Inner">
        
          <button className='ModalClose' onClick={() => props.setVisible(false)}><FontAwesomeIcon icon={faTimes} size='lg'/></button>
          <Image data={props.selectedPicture.el}></Image>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PictureModal;

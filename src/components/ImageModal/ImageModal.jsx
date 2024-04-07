// import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
// import { IoClose } from "react-icons/io5";

// images: {results}

const ImageModal = ({isOpen, onClose, card }) => {
  
  return (
    <Modal
      isOpen={isOpen} // state
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => onClose()} // ESC
      shouldCloseOnEsc={true}
      className={css.modal}
      closeTimeoutMS={50}
      overlayClassName={css.modalOverlay}
      ariaHideApp={false}
      // contentLabel="Example Modal"
    >
{/* <button className={css.modal-close} onClick={() => onClose()}>
        <IoClose />
      </button> */}
      <div className={css.imageModalContainer}>
        <img src={card.urls.regular} alt={card.description} className={css.imageModal} />
         {/* <h1>Description: {card.description}</h1> */}
         <p>Likes: { card.likes}</p>
         <h2>Autore image: { card.user.name}</h2>
     </div>
    </Modal>
    
  )
}

export default ImageModal


import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({isOpen, onClose, card: {urls, description, likes, user: {name}} }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      shouldCloseOnEsc={true}
      className={css.modal}
      closeTimeoutMS={50}
      overlayClassName={css.modalOverlay}
      ariaHideApp={false}
    >
      <div className={css.imageModalContainer}>
        <img src={urls.regular} alt={description} className={css.imageModal} />
        <p>Likes: {likes}</p>
        <h2>Author image: {name}</h2>
      </div>
    </Modal> 
  )
}

export default ImageModal


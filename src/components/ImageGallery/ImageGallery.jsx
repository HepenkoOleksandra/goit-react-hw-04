import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({images, getImageCard, openModal}) => {
  return (
      <ul className={css.gallery}>
      <li className={css.galleryList}>
        {Array.isArray(images) && images.map((image) => {
          return (
            <ImageCard key={image.id} image={image} getImageCard={getImageCard} openModal={openModal} />
          )
        })}
        </li>
      </ul>
  )
}

export default ImageGallery
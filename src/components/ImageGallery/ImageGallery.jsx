import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images}) => {
  return (
      <ul>
      <li>
        {Array.isArray(images) && images.map((image) => {
          return (
            <ImageCard key={image.id} image={image} />
          )
        })}
        </li>
      </ul>
  )
}

export default ImageGallery
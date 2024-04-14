import { useEffect, useState } from "react";
import { getImages } from "./apiService/photos";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageCard, setImageCard] = useState(null);
    
  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setShowBtn(data.total_pages > page);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchWord) => {
    if (searchWord === query) return;
    setQuery(searchWord);
    setImages([]);
    setPage(1);
    setShowBtn(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }
  
   const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const getImageCard = (card) => {
    setImageCard(card);
  }

  return (
    <div className='container'>
      <SearchBar onFormSubmit={onSetSearchQuery} /> 
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <ImageGallery  images={images} getImageCard={getImageCard} openModal={openModal} />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>}
      {imageCard && (<ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        card={imageCard}/>)}  
    </div>
  )
}

export default App

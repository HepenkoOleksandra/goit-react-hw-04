// import { useState } from 'react'
// import './App.css'
// import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
// import axios from "axios";
import { getImages } from "./apiService/photos";


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
    
  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      // setImages([]);
        setIsError(false);
        setIsLoading(true);
      try {
        
        const data = await getImages(query, page);
       
        setImages((prevImages) => [...prevImages, ...data.results]);
        console.log(data.results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchWord) => {
    setQuery(searchWord);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
}

  return (
  <>
      <SearchBar onFormSubmit={onSetSearchQuery} /> 
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>}
      <ImageModal/>
  </>
  )
}


export default App

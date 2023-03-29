import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import './assets/tailwind.css';
import ImageSearch from './components/ImageSearch';
import MoonLoader from "react-spinners/MoonLoader";
import Navbar from './components/Navbar'



function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&per_page=16&page=1`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
        console.log(images)
      })
      .catch(err => console.log(err))
  }, [searchTerm]);


  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <ImageSearch searchText={(text) => setSearchTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className='text-5xl mx-auto text-center mt-32'>No Images Found!</h1>}


        {isLoading ?
          <div className='flex justify-center items-center mt-32'><MoonLoader color="#36d7b7" /></div>
          :
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

              {images.map(image => (
                <ImageCard key={images.id} image={image} />
              ))}
            </div>
          </div>}
      </div>
    </div>
  );
}

export default App;

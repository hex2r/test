import React, { useEffect, useState } from 'react';
import { ImageGallery } from './components';

const responseImage = fetch('http://localhost:3002')
  .then(response => {
    if (!response.ok) {
      throw Error('Fetching Error!');
    }
    return response.json();
  });

const App = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    responseImage.then(data => {
      const { gallery } = data;
      console.log(data); // Print out response result
      setGalleryData(gallery);
    })
    .catch(error => {
      throw Error(error.message);
    });
  }, []);

  return <ImageGallery galleryData={galleryData} />;
}

export default App;

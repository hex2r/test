import React, { useEffect, useState } from 'react';
import { ImageGallery } from './components';

// Delay (simulate slow API)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchGalleryData = async () => {
  try {
    await delay(1000); // await delay (for test)
    const response = await fetch('http://localhost:3002');
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}

const App = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetchGalleryData().then(data => {
      const { gallery} = data;
      console.log(gallery); // print out gallery images data
      setGalleryData(gallery);
    });
  }, []);

  return <ImageGallery galleryData={galleryData} />;
}

export default App;

import React from 'react';
import './style.css';

const Gallery = ({ children }) => <div className="gallery">{children}</div>;

const GalleryItem = ({ children }) => <div className="gallery__item">{children}</div>;

Gallery.Item = GalleryItem;

export default Gallery;

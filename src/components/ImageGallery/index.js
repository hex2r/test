import React from 'react';
import PropTypes from 'prop-types';
import { Gallery } from '../../ui';
import ThumbnailImage from '../ThumbnailImage';
import LazyLoad from 'react-lazyload';

const ImageGallery = ({ galleryData }) => {
  return (
    galleryData && galleryData.length ? (
      <Gallery>
        {
          galleryData.map((image, index) => (
            <Gallery.Item key={image.url + index}>
              <LazyLoad
                classNamePrefix="thumbnail"
                offset={0}
                resize
              >
                <ThumbnailImage
                  placeholder={image.placeholder}
                  url={image.url}
                  alt={image.description}
                />
              </LazyLoad>
            </Gallery.Item>
          ))
        }
      </Gallery>
    ) : <div>Loading...</div>
  );
};

ImageGallery.propTypes = {
  galleryData: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

ImageGallery.defaultProps = {
  galleryData: [],
}

export default ImageGallery;

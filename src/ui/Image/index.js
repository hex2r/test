import React, { useState, useMemo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

const Image = ({
  url,
  placeholder,
  modifier,
  alt,
  onLoad,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const handleLoaded = () => {
    setLoaded(true);
    onLoad();
  };

  const classNames = cx(
    'image', {
      [`image--${modifier}`]: modifier,
      'is-hidden': !loaded,
      'is-visible': loaded,
    },
  );

  const preloadImage = () => {
    if (!loaded && placeholder) {
      setCurrentUrl(placeholder);
      return;
    }

    setCurrentUrl(url);
  }

  useMemo(preloadImage, [loaded]);

  return (
    <img
      className={classNames}
      src={currentUrl}
      alt={alt}
      onLoad={handleLoaded}
    />
  )
};

Image.modifiers = {
  contain: 'contain-size',
  cover: 'cover-size',
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  alt: PropTypes.string,
  modifier: PropTypes.oneOf(Object.values(Image.modifiers)),
  onLoad: PropTypes.func,
};

Image.defaultProps = {
  alt: '',
  placeholder: '',
  modifier: '',
  onLoad: () => {},
};

export default Image;

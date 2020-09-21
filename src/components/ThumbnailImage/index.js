import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Thumbnail, Image } from '../../ui';

const ThumbnailImage = ({ url, placeholder, alt }) => {
  const [busy, setBusy ] = useState(true);
  const handleBusy = () => {
    setBusy(false);
  };

  return (
    <Thumbnail busy={busy}>
      <Image
        placeholder={placeholder}
        url={url}
        modifier={Image.modifiers.contain}
        alt={alt}
        onLoad={handleBusy}
      />
    </Thumbnail>
  );
};

ThumbnailImage.propTypes = {
  url: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
};

ThumbnailImage.defaultProps = {
  alt: '',
  placeholder: '',
  srcSet: null,
  onLoad: () => {},
}

export default ThumbnailImage;

import React from 'react';
import cx from 'classnames';
import './style.css';
import PropTypes from 'prop-types';

const Thumbnail = ({ children, theme, busy }) => {
  const classNames = cx(
    'thumbnail', {
    [`thumbnail--${theme}`]: theme,
    'is-busy': busy,
  });

  return (
    <div className={classNames} tabIndex={busy ? -1 : 0}>
      <div className="thumbnail__item">
        { children }
      </div>
    </div>
  );
};

Thumbnail.themes = {
  dark: 'dark',
};

Thumbnail.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.values(Thumbnail.themes)),
  busy: PropTypes.bool,
};

Thumbnail.defaultProps = {
  children: null,
  theme: Thumbnail.themes.dark,
  busy: false,
};

export default Thumbnail;

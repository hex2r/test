import React, { memo } from 'react';
import cx from 'classnames';
import './style.css';
import PropTypes from 'prop-types';

const FormLabel = ({ value, htmlFor, theme, isHidden }) => {
  const classNames = cx(
    'form-label', {
      [`form-label--${theme}`]: theme,
      'visually-hidden': isHidden,
    }
  );

  return (
    <label className={classNames} htmlFor={htmlFor}>{value}</label>
  );
};

FormLabel.themes = {
  primary: 'primary',
};

FormLabel.propTypes = {
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.values(FormLabel.themes)),
  isHidden: PropTypes.bool,
};

FormLabel.defaultProps = {
  isHidden: false,
  theme: FormLabel.themes.primary,
};

export default memo(FormLabel);

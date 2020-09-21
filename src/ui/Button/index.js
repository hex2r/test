import React from 'react';
import cx from 'classnames';
import './style.css';
import PropTypes from 'prop-types';

const Button = ({ type, theme, text, disabled, onClick }) => {
  const classNames = cx('button', {
    [`button--${theme}`]: theme,
  });
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.themes = {
  primary: 'primary',
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  theme: PropTypes.oneOf(Object.values(Button.themes)),
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  theme: Button.themes.primary,
  onClick: () => {},
};

export default React.memo(Button);


import React from 'react';
import cx from 'classnames';
import './style.css';
import PropTypes from 'prop-types';

const Form = ({ children, theme, onSubmit }) => {
  const classNames = cx('form', { [`form--${theme}`]: theme });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className={classNames} onSubmit={handleSubmit} noValidate>
      {children}
    </form>
  );
};

Form.themes = {
  primary: 'primary'
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.values(Form.themes)),
};

Form.defaultProps = {
  theme: Form.themes.primary,
};


export default Form;

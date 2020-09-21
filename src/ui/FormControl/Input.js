import React from 'react';
import cx from 'classnames';
import './input.css';
import PropTypes from 'prop-types';

import { FormLabel } from '../../ui';

const Input = ({
  id,
  type,
  name,
  value,
  placeholder,
  theme,
  label,
  hideLabel,
  errorMessage,
  required,
  onBlur,
  onChange,
  ...props
}) => {
  const classNames = cx(
    'form-control', {
      [`form-control--${theme}`]: theme,
      'is-invalid': errorMessage.length,
    },
  );
  const handleChange = e => {
    onChange(e);
  };
  const handleBlur = e => {
    onBlur(e);
  };

  return (
    <>
      <FormLabel htmlFor={id} value={label} isHidden={hideLabel} />
      <input
        id={id}
        className={classNames}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        aria-errormessage={errorMessage}
        aria-invalid={!!errorMessage.length}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {!!errorMessage.length && <div className="error-message">{errorMessage}</div>}
    </>
  );
};

Input.themes = {
  primary: 'primary',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.oneOf(['text', 'email', 'date', 'color']),
  placeholder: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(Input.themes)),
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  hideLabel: PropTypes.bool,
  required: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  theme: Input.themes.primary,
  errorMessage: '',
  hideLabel: false,
  required: false,
  onBlur: () => {},
  onChange: () => {},
};

export default Input;

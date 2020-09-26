import React, { memo } from 'react';
import cx from 'classnames';
import './input.css';
import PropTypes from 'prop-types';
import { areEqualProps } from '../../scripts';

import { FormLabel } from '../../ui';

const Select = memo(({ id, value, label, hideLabel, name, children, theme, onChange }) => {
  const classNames = cx('form-control form-control--select', {
    [`form-control--${theme}`]: theme,
  });
  const handleChange = e => {
    onChange(e);
  };

  return (
    <>
      <FormLabel value={label} htmlFor={id} isHidden={hideLabel} />
      <select
        id={id}
        value={value}
        name={name}
        className={classNames}
        onChange={handleChange}
      >
        {children}
      </select>
    </>
  );
}, (prev, next) => prev.value === next.value);

Select.themes = {
  primary: 'primary',
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  theme: PropTypes.oneOf(Object.values(Select.themes)),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  children: null,
  hideLabel: false,
  theme: Select.themes.primary,
  onChange: () => {},
};

export default Select;

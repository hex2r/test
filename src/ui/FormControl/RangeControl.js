import React, { memo } from 'react';
import cx from 'classnames';
import './range-control.css';
import PropTypes from 'prop-types';
import { areEqualProps } from '../../scripts';

import { FormLabel } from '../../ui';

const RangeControl = ({
  name,
  id,
  min,
  max,
  step,
  value,
  theme,
  label,
  hideLabel,
  outputAfter,
  onChange,
}) => {
  const componentClassName = 'range-control';
  const classNames = cx(
    componentClassName, {
      [`${componentClassName}--${theme}`]: theme,
    },
  );
  const handleChange = e => {
    onChange(e);
  };

  return (
    <>
      <FormLabel value={label} htmlFor={id} isHidden={hideLabel} />
      <div className={classNames}>
        <div className={`${componentClassName}__slider-container`}>
          <span className={`${componentClassName}__min`}>{min}</span>
          <input
            id={id}
            name={name}
            type="range"
            className={`${componentClassName}__slider`}
            max={max}
            min={min}
            step={step}
            onChange={handleChange}
            value={value}
          />
          <span className={`${componentClassName}__max`}>{max}</span>
        </div>
        <output className={`${componentClassName}__output`}>{value}{outputAfter}</output>
      </div>
    </>
  );
};

RangeControl.themes = {
  primary: 'primary',
};

RangeControl.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  step: PropTypes.number,
  theme: PropTypes.oneOf(Object.values(RangeControl.themes)),
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  outputAfter: PropTypes.string,
  onChange: PropTypes.func,
};

RangeControl.defaultProps = {
  step: 1,
  theme: RangeControl.themes.primary,
  hideLabel: false,
  onChange: () => {},
};

export default memo(RangeControl, areEqualProps);

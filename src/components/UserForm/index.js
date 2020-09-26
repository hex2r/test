import React, { useState, useMemo, useReducer, memo, createRef } from 'react';
import { basicColors } from '../../constants/colors';
import validate from '../../validation';
import isEmpty from 'lodash.isempty';

/* Note:
* In my opinion, better solution for form validation is using packages
* like https://formik.org/ or https://react-hook-form.com/
* */

import { Input, RangeControl, Select, Button, Form, List } from '../../ui';

const initialState = {
  name: '',
  email: '',
  date: '',
  favoriteColor: basicColors.black, // sorry for American English :)
  customFavoriteColor: '',
  salary: 500,
};

const init = initialValues => ({ ...initialValues });
const reducer = (state, { field, value }) => ({ ...state, [field]: value });

const UserForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const refs = {
    name: createRef(),
    email: createRef(),
    date: createRef(),
  }; // create refs for validation items

  const handleChange = e => {
    const { name, value } = e.target;

    // Remove error on type
    if (errors.hasOwnProperty(name)) {
      const {[name]: error, ...restErrors} = errors;
      setErrors(restErrors);
    }

    dispatch({ field: name, value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validationResult = validate(state);
    setErrors(validationResult);

    // Submit if error object is empty
    if (isEmpty(validationResult)) {
      console.log('Submit >', state);

      alert('Form submitted!');
      return true;
    }

    // Set focus on first invalid field
    refs[Object.keys(validationResult)[0]].current.focus();
  }

  // Show/hide color picker when selected custom color
  const handleFavoriteColor = () => {
    if (state.favoriteColor !== 'custom') {
      if (colorPickerVisible) {
        setColorPickerVisible(false)
      }
      return;
    }

    setColorPickerVisible(true);
  };

  const {
    name, email, date,
    favoriteColor, customFavoriteColor, salary
  } = state;

  useMemo(handleFavoriteColor, [favoriteColor]);

  // Todo: Move all texts into the constants folder
  return (
    <Form onSubmit={handleSubmit}>
      <List modifier={List.modifiers.simple}>
        <List.Item>
          <Input
            errorMessage={errors.name}
            id="inputName"
            label="Name*"
            name="name"
            onChange={handleChange}
            placeholder="e.g. John Lennon"
            ref={refs.name}
            required
            type="text"
            value={name}
          />
        </List.Item>
        <List.Item>
          <Input
            errorMessage={errors.email}
            id="inputEmail"
            label="Email*"
            name="email"
            placeholder="e.g. john.lennon@icloud.com"
            ref={refs.email}
            required
            type="email"
            value={email}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <Input
            errorMessage={errors.date}
            id="inputDate"
            label="Date of birth*"
            max="2016-01-01"
            min="1920-01-01"
            name="date"
            ref={refs.date}
            required
            type="date"
            value={date}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <Select
            id="selectFavoriteColor"
            label="Favorite colour"
            name="favoriteColor"
            value={favoriteColor}
            onChange={handleChange}
          >
            {
              Object.keys(basicColors).map(key => (
                <option key={key} value={key}>{basicColors[key]}</option>
              ))
            }
          </Select>
        </List.Item>
        {
          colorPickerVisible && (
            <List.Item>
              <Input
                hideLabel
                id="inputCustomFavoriteColor"
                label="Choose custom color from the color picker"
                name="customFavoriteColor"
                type="color"
                value={customFavoriteColor}
                onChange={handleChange}
              />
            </List.Item>
          )
        }
        <List.Item>
          <RangeControl
            id="inputSalary"
            label="Salary"
            max={10000}
            min={500}
            name="salary"
            outputAfter="&nbsp;&#163;"
            step={50}
            value={salary}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <Button type="submit" text="Submit" />
        </List.Item>
      </List>
    </Form>
  )
};

export default memo(UserForm);

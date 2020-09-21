import React, { useState, useMemo } from 'react';
import { basicColors } from '../../constants/colors';
import validate from '../../validation';
/*
* // lodash.isempty: it's good idea to use (no need to invent a bicycle)
* */
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
  errors: {},
};

const UserForm = () => {
  const [state, setState] = useState(initialState);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

  const handleChange = e => {
    const {[e.target.name]: error, ...errors} = state.errors; // exclude error

    setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: errors,
    });
  };

  const handleSubmit = () => {
    const validationErrors = validate(state);

    if (isEmpty(validationErrors)) {
      setState({...state, errors: validationErrors});
      console.log(state)
      return state;
    }

    setState({...state, errors: validationErrors});
  };

  const handleFavoriteColor = () => {
    if (state.favoriteColor !== 'custom') {
      if (colorPickerVisible) {
        setColorPickerVisible(false)
      }
      return;
    }

    setColorPickerVisible(true);
  }

  useMemo(handleFavoriteColor, [state.favoriteColor]);

  // Todo: Move all texts into the constants folder
  return (
    <Form onSubmit={handleSubmit}>
      <List modifier={List.modifiers.simple}>
        <List.Item>
          <Input
            type="text"
            name="name"
            value={state.name}
            placeholder="e.g. John Lennon"
            id="inputName"
            label="Name*"
            errorMessage={state.errors.name}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <Input
            type="email"
            name="email"
            value={state.email}
            errorMessage={state.errors.email}
            id="inputEmail"
            label="Email*"
            placeholder="e.g. john.lennon@icloud.com"
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <Input
            type="date"
            name="date"
            id="inputDate"
            label="Date of birth*"
            min="1920-01-01"
            max="2016-01-01"
            errorMessage={state.errors.date}
            value={state.date}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <Select
            name="favoriteColor"
            id="selectFavoriteColor"
            label="Favorite colour"
            value={state.favoriteColor}
            onChange={handleChange}
          >
            {
              Object.values(basicColors).map(color => (
                <option key={color} value={color}>{color}</option>
              ))
            }
            <option value="custom">Custom color</option>
          </Select>
        </List.Item>
        {
          colorPickerVisible && (
            <List.Item>
              <Input
                id="inputCustomFavoriteColor"
                name="customFavoriteColor"
                type="color"
                label="Choose custom color from the color picker"
                value={state.customFavoriteColor}
                onChange={handleChange}
                hideLabel
              />
            </List.Item>
          )
        }
        <List.Item>
          <RangeControl
            name="salary"
            id="inputSalary"
            min={500}
            max={10000}
            step={50}
            label="Salary"
            value={state.salary}
            outputAfter="&nbsp;&#163;"
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

export default UserForm;

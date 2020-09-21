import { validEmailRegex, validNameRegex, validDateRegex } from './regExps';

export default (fields) => {
  const { name, email, date } = fields || {};
  const errors = {};

  if (name) {
    if (name.length < 2) {
      errors.name = 'This field must contain at least 2 letters';
    }

    if (!validNameRegex.test(name)) {
      errors.name = 'This field must contain only name';
    }
  } else {
    errors.name = 'Required field';
  }

  if (email) {
    if (!validEmailRegex.test(email)) {
      errors.email = 'Incorrect email address';
    }
  } else {
    errors.email = 'Required field';
  }

  if (date) {
    if (!validDateRegex.test(date)) {
      errors.date = 'Incorrect date';
    }
  } else {
    errors.date = 'Required field';
  }

  return errors;
};


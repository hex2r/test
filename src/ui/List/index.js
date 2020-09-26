import React, { memo } from 'react';
import cx from 'classnames';
import './style.css';
import PropTypes from 'prop-types';

const List = memo(({ children, modifier }) => {
  const classNames = cx(
    'list', {
      [`list--${modifier}`]: modifier,
    }
  );

  return (
    <ol className={classNames}>
      { children }
    </ol>
  );
});

const ListItem = memo(({ children }) => (
  <li className="list__item">{children}</li>
));

List.Item = ListItem;

List.modifiers = {
  simple: 'simple',
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  modifier: PropTypes.oneOf(Object.values(List.modifiers)),
};

export default List;

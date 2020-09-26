import isEqual from 'lodash.isequal';
import functions from 'lodash.functions';
import omit from 'lodash.omit';

/**
 * @param prev {Object}
 * @param next {Object}
 * @description Exclude functions and check if objects are equal
 * @return boolean
 * */
export const areEqualProps = (prev, next) => (
  isEqual(omit(prev, functions(prev)), omit(next, functions(next)))
);

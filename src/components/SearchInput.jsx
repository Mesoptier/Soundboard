import styles from './SearchInput.scss';
import React, { PropTypes } from 'react';

export default function SearchInput({ query, onChange }) {
  return (
    <input
      className={query ? styles.inputActive : styles.input}
      type="text"
      initialValue={query}
      placeholder="Cook, Search, Delicious!"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

SearchInput.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
};

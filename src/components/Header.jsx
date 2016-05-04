import styles from './Header.scss';
import React, { PropTypes } from 'react';
import SearchInput from './SearchInput.jsx';

export default function Header({ searchQuery, onSearchChange }) {
  return (
    <div className={styles.header}>
      <SearchInput
        query={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
}

Header.propTypes = {
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func,
};

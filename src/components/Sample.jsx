import styles from './Sample.scss';
import React, { PropTypes } from 'react';
import Ink from 'react-ink';

export default function Sample({ name, location, onSelect }) {
  return (
    <div className={styles.sample} onClick={onSelect}>
      <span className={styles.name}>{name}</span>
      <span className={styles.location}>{location}</span>
      <Ink opacity={0.1} />
    </div>
  );
}

Sample.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  onSelect: PropTypes.func,
};

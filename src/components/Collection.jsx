import styles from './Collection.scss';
import React, { PropTypes } from 'react';
import Sample from './Sample.jsx';

export default function Collection({ items = [], onSelect }) {
  return (
    <div className={styles.collection}>
      {
        items.map((item) => (
          <Sample
            key={item.file}
            name={item.name}
            location={item.location}
            onSelect={() => onSelect(item)}
          />
        ))
      }
    </div>
  );
}

Collection.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
};

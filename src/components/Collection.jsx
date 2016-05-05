import styles from './Collection.scss';
import React, { PropTypes } from 'react';
import Sample from './Sample.jsx';

const propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
};

function Collection({ items = [], onSelect }) {
  return (
    <div className={styles.collection}>
      {
        items.map((item) => (
          <div key={item.file} className={item.filtered ? styles.itemFiltered : styles.item}>
            <Sample item={item} onSelect={onSelect} />
          </div>
        ))
      }
    </div>
  );
}

Collection.propTypes = propTypes;

export default Collection;

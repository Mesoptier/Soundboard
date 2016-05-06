import styles from './Collection.scss';
import React, { Component, PropTypes } from 'react';
import Sample from './Sample.jsx';

class Collection extends Component {

  static propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func,
  };

  shouldComponentUpdate(nextProps) {
    return this.props.items !== nextProps.items;
  }

  render() {
    const { items, onSelect } = this.props;

    return (
      <div className={styles.outer}>
        <div className={styles.inner}>
          {
            items.map((item) => (
              <div
                key={item.file}
                className={item.filtered ? styles.itemFiltered : styles.item}
              >
                <Sample item={item} onSelect={onSelect} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default Collection;

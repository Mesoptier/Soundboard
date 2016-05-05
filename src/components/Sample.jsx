import styles from './Sample.scss';
import React, { Component, PropTypes } from 'react';
import { autobind } from 'core-decorators';
import Ink from 'react-ink';

const propTypes = {
  item: PropTypes.shape({
    id: React.PropTypes.string,
    file: React.PropTypes.string,
    name: React.PropTypes.string,
    location: React.PropTypes.string,
  }),
  onSelect: PropTypes.func,
};

class Sample extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.item.id !== nextProps.item.id;
  }

  @autobind
  handleSelect() {
    this.props.onSelect(this.props.item);
  }

  render() {
    const { name, location } = this.props.item;
    return (
      <div className={styles.sample} onClick={this.handleSelect}>
        <span className={styles.name}>{name}</span>
        <span className={styles.location}>{location}</span>
        <Ink opacity={0.1} />
      </div>
    );
  }

}

Sample.propTypes = propTypes;

export default Sample;

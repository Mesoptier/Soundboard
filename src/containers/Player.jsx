import styles from './Player.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

@connect(({ player }) => ({
  activeSample: player.activeSample,
}))
class Player extends Component {

  static propTypes = {
    activeSample: PropTypes.shape({
      file: React.PropTypes.string,
      name: React.PropTypes.string,
      location: React.PropTypes.string,
    }),
  };

  render() {
    const { activeSample } = this.props;

    return (
      <div className={styles.player}>
        Player: {activeSample ? activeSample.file : 'no sample'}
      </div>
    );
  }

}

export default Player;

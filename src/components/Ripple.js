import styles from './Ripple.scss';
import React, { Component } from 'react';
import { autobind } from 'core-decorators';

export default class Ripple extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      start: false,
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.mouseUp);
  }

  @autobind
  mouseDown(e) {
    this.setState({
      pressed: true,
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });

    setTimeout(() => {
      this.setState({
        start: true,
      });
    }, 0);
  }

  @autobind
  mouseUp() {
    if (this.state.pressed) {
      this.setState({
        pressed: false,
        start: false,
      });
    }
  }

  render() {
    const { pressed, start, x, y } = this.state;
    let circleClassName;

    if (start) {
      circleClassName = styles.circlePressedStart;
    } else if (pressed) {
      circleClassName = styles.circlePressed;
    } else {
      circleClassName = styles.circle;
    }

    return (
      <div className={styles.ripple} onMouseDown={this.mouseDown}>
        <div
          className={circleClassName}
          style={{
            top: `${y}px`,
            left: `${x}px`,
          }}
        />
      </div>
    );
  }

}

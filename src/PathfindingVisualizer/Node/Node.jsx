import React, { Component } from 'react';
import './Node.css';
import start from './start.png';
import target from './target.png';

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;

    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';

    const startNodeStyle = {
      backgroundImage: `url(${start})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    };

    const endNodeStyle = {
      backgroundImage: `url(${target})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
        style={isStart ? startNodeStyle : isFinish ? endNodeStyle : {}}
      ></div>
    );
  }
}

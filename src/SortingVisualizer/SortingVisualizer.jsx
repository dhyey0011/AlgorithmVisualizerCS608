import React from 'react';
import { getMergeSortAnimations, getBubbleSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';
import Button from 'react-bootstrap/Button';

// Change this value for the speed of the animations.


// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 35;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      speed: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
  }
  componentDidMount() {
    this.resetArray();
    document.addEventListener("mousemove", this.handleMouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }
  handleMouseMove(event) {
    const newPosition = event.clientX / window.innerWidth;
    this.setState({ position: newPosition });
  }

  handleSpeedChange(event) {
    const newSpeed = event.target.value;
    this.setState({ speed: newSpeed });
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 330));
    }
    this.setState({ array });
  }

  generateMediumArray() {
    const array = [];
    const numberOfBars = 30;
    for (let i = 0; i < numberOfBars; i++) {
      array.push(randomIntFromInterval(5, 350));
    }
    this.setState({ array });
  }

  generateLargeArray() {
    const array = [];
    const numberOfBars = 50;
    for (let i = 0; i < numberOfBars; i++) {
      array.push(randomIntFromInterval(5, 450));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length - 1; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.speed);
      }
    }
  }

  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
        if (barOne && barTwo) {
          const barOneStyle = barOne.style;
          const barTwoStyle = barTwo.style;
          const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * this.state.speed);
        }
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = arrayBars[barOneIdx];
          if (barOne) {
            const barOneStyle = barOne.style;
            barOneStyle.height = `${newHeight}px`;
          }
        }, i * this.state.speed);
      }
    }
  }
  render() {
    const { array } = this.state;
    return (
      <>
        <div className="contain-all">
          <div className="container">
            <div className="array-container">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                  }}>

                </div>
              ))}
            </div>
            <div>
              <Button variant="success" onClick={() => this.mergeSort()}>Merge Sort</Button>
              <Button variant="success" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
              <Button variant="success" onClick={() => this.generateMediumArray()}>Generate Medium Array</Button>
              <Button variant="success" onClick={() => this.generateLargeArray()}>Generate Large Array</Button>
            </div>
            <div class="slider-container">
              <input
                type="range"
                min="0"
                max="20"
                value={this.state.speed}
                onChange={this.handleSpeedChange}
                class="slider"
              />
              <span class="slider-value">Add Delay(in MS): {this.state.speed}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

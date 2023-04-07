import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import "./index.css";
import "./Navbar.css"
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="pathfinding-visualizer">
        <PathfindingVisualizer />
      </Element>
      <Element name="sorting-visualizer">
        <SortingVisualizer />
      </Element>
    </div>
  );
}

export default App;
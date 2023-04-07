import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import "./index.css";
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';


function App() {
  return (
    <>
    <div className="App">
      <PathfindingVisualizer/>
      <SortingVisualizer/>
    </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import "./index.css";
import "./Navbar.css"
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import InfoSidebar from './Info/InfoSidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisualizerSidebar from './visualizer/VisualizerSidebar';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/visualizer" element={<VisualizerSidebar />} />
          <Route path="/info" element={<InfoSidebar />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
/*
      <Navbar />
      <Element name="pathfinding-visualizer">
        <PathfindingVisualizer />
      </Element>
      <Element name="sorting-visualizer">
        <SortingVisualizer />
      </Element>
*/
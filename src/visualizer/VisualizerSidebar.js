import React , { useState } from 'react'
import PathfindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer';
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import Sidebar from './sidebarInfo/sidebar';
import { SlArrowRight } from "react-icons/sl";

const VisualizerSidebar = () => {
  const [selectedItem, setSelectedItem] = useState({ name: 'Dijkstra', component: <PathfindingVisualizer /> });

  const handleItemSelected = (item) => {
    setSelectedItem({ name: item.name, component: item.component });
  };

  const sidebarItems = [
    {
      name: 'pathfindingvisualizer',
      label: "Path Finding",
      icon: <SlArrowRight />,
      component: <PathfindingVisualizer />
    },
    {
      name: 'sortingVisualizer',
      label: 'Sorting',
      icon: <SlArrowRight />,
      component: <SortingVisualizer />
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Sidebar items={sidebarItems} onItemSelected={handleItemSelected} />
    <div style={{ flex: 1, overflowY: 'auto' }}>
      {selectedItem.component}
    </div>
  </div>
  );
}

export default VisualizerSidebar;
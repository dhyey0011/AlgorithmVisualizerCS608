import React , { useState } from 'react'
import DijkstraAlgorithmInfo from './Dijkstra/InfoDijkstra';
import AstarAlgorithmInfo from './Astar/InfoAstar';
import Sidebar from './sidebarInfo/sidebar';
import { SlArrowRight } from "react-icons/sl";

const InfoSidebar = () => {
  const [selectedItem, setSelectedItem] = useState({ name: 'Dijkstra', component: <DijkstraAlgorithmInfo /> });

  const handleItemSelected = (item) => {
    setSelectedItem({ name: item.name, component: item.component });
  };

  const sidebarItems = [
    {
      name: 'Dijkstra',
      label: "Dijkstra's Algorithm",
      icon: <SlArrowRight />,
      component: <DijkstraAlgorithmInfo />
    },
    {
      name: 'PathfindingVisualizer',
      label: 'A Star Algorithm',
      icon: <SlArrowRight />,
      component: <AstarAlgorithmInfo />
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

export default InfoSidebar
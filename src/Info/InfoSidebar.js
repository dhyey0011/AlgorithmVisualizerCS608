import React , { useState } from 'react'
import DijkstraAlgorithmInfo from './Dijkstra/InfoDijkstra';
import AstarAlgorithmInfo from './Astar/InfoAstar';
import MergeAlgorithmInfo from './Merge/InfoMerge';
import BubbleAlgorithmInfo from './Bubble/InfoBubble';

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
      label: "Dijkstra's Algo",
      icon: <SlArrowRight />,
      component: <DijkstraAlgorithmInfo />
    },
    {
      name: 'A * Algorithm',
      label: 'A Star Algorithm',
      icon: <SlArrowRight />,
      component: <AstarAlgorithmInfo />
    },
    {
      name: 'Merge sort',
      label: 'Merge Sort',
      icon: <SlArrowRight />,
      component: <MergeAlgorithmInfo />
    },
    {
      name: 'Bubble Sort',
      label: 'Bubble Sort',
      icon: <SlArrowRight />,
      component: <BubbleAlgorithmInfo />
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
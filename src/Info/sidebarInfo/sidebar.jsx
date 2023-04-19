import React, { useState } from 'react';
import './sidebar.css';

function Sidebar(props) {
  const [activeItem, setActiveItem] = useState(props.items[0].name);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    const selectedItem = props.items.find((item) => item.name === itemName);
    props.onItemSelected(selectedItem);
  };

  const renderItems = () => {
    return props.items.map((item) => (
      <div className="sidebar-list">
      <li
        key={item.name}
        className={`sidebar-item ${
          activeItem === item.name ? 'sidebar-item-active' : ''
        }`}
        onClick={() => handleItemClick(item.name)}
      >
        {item.icon}
        {item.label}
      </li>
      </div>
    ));
  };

  return <ul className="sidebar">{renderItems()}</ul>;
}

export default Sidebar;

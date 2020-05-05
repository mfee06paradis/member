import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import { makeAnimationSlideLeft } from './AnimatedVisibility';
import SideBar from './SideBar';
import Switch from './Switch';
import '../styles/App2.css';

function ToggleButton({ onClick }) {
  return (
    <div className="toggle" onClick={onClick} style={{ position: 'relative' }}>
      <Switch />
    </div>
  );
}

function Sidebar() {
  return (
    <Router>
      <SideBar />
    </Router>
  );
}

const AnimatedSidebar = makeAnimationSlideLeft(Sidebar);

function ControlSideBar() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);

  function toggleSidebar() {
    setSidebarOpen(!sidebarIsOpen);
  }

  return (
    <>
      <ToggleButton isOpen={sidebarIsOpen} onClick={toggleSidebar} />
      <AnimatedSidebar
        open={sidebarIsOpen}
        className="animated slideInLeft on-top"
        style={{
          animationDelay: '0ms',
          animationDuration: '400ms',
          pointerEvents: 'all',
        }}
      />
    </>
  );
}

export default ControlSideBar;

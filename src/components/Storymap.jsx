import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';

const Storymap = () => {
  const [currentPanel, setCurrentPanel] = useState();
  return (
    <section className="storymap__wrapper">
      <Sidebar setCurrentPanel={setCurrentPanel} />
      <Map currentPanel={currentPanel} />
    </section>
  );
}

export default Storymap;

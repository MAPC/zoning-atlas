import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';

const Storymap = () => {
  const [currentPanel, setCurrentPanel] = useState();
  return (
    <section className="storymap__wrapper">
      <Map currentPanel={currentPanel} />
      <Sidebar setCurrentPanel={setCurrentPanel} />
    </section>
  );
}

export default Storymap;

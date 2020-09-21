import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Map from './Map';

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

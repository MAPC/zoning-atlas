import React, { useState } from 'react';
import Sidebar from './Sidebar';
import NarrativeMap from './NarrativeMap';

const Storymap = () => {
  const [currentPanel, setCurrentPanel] = useState();
  return (
    <section className="storymap__wrapper">
      <Sidebar setCurrentPanel={setCurrentPanel} />
      <NarrativeMap currentPanel={currentPanel} />
    </section>
  );
}

export default Storymap;

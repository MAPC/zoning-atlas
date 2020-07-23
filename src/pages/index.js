import React, { useState } from "react"
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import '../styles/app.scss'

export default function Home() {
  const [currentPanel, setCurrentPanel] = useState();
  return (
    <>
      <Sidebar setCurrentPanel={setCurrentPanel} />
      <Map currentPanel={currentPanel} />
    </>
  )
}

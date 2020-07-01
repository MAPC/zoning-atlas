import React from 'react';
import './App.css';
import Map from './Map';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
      <h1>Zoning Atlas</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor odio nec urna mattis dignissim. Mauris vitae feugiat nibh, id ultricies arcu. Proin sit amet neque molestie, porta augue id, ultricies tellus. Sed erat lectus, elementum molestie congue id, venenatis at libero. Phasellus convallis lacus dui, ac elementum nibh vulputate eu. Vivamus in odio vitae massa sagittis pharetra quis id turpis. Fusce ullamcorper mi et lorem aliquet commodo sed vel libero. Integer ut diam congue, ultrices nisl sed, lobortis augue. </p>
      <main className="main">
        <Sidebar />
        <Map />
      </main>
      <section className="section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor odio nec urna mattis dignissim. Mauris vitae feugiat nibh, id ultricies arcu. Proin sit amet neque molestie, porta augue id, ultricies tellus. Sed erat lectus, elementum molestie congue id, venenatis at libero. Phasellus convallis lacus dui, ac elementum nibh vulputate eu. Vivamus in odio vitae massa sagittis pharetra quis id turpis. Fusce ullamcorper mi et lorem aliquet commodo sed vel libero. Integer ut diam congue, ultrices nisl sed, lobortis augue. </p>
      </section>
    </>
  );
}

export default App;

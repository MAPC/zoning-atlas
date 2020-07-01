import React from 'react';

const Sidebar = () => {
  return (
   <aside className="sidebar">
     <div className="sidebar__item panel panel--active" id="item1">
      <h2 className="panel__title">Zone Types</h2>
      <p className="panel__content">Data for all presented maps is currently a work in progress; used for functional display purposes only.</p>
      <p className="panel__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed interdum orci, ac ornare eros. Donec imperdiet sapien eu turpis malesuada sagittis eu eu mi. Mauris varius felis id lorem fermentum, eu tristique dolor condimentum. Praesent molestie justo et condimentum finibus. Phasellus venenatis lacinia augue quis volutpat. Cras malesuada orci eget felis ultricies commodo. Donec varius feugiat mattis.</p>
    </div>
    <div className="sidebar__item panel" id="item2">
      <h2 className="panel__title">Multi-Family Housing</h2>
      <p className="panel__content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed interdum orci, ac ornare eros. Donec imperdiet sapien eu turpis malesuada sagittis eu eu mi. Mauris varius felis id lorem fermentum, eu tristique dolor condimentum. Praesent molestie justo et condimentum finibus. Phasellus venenatis lacinia augue quis volutpat. Cras malesuada orci eget felis ultricies commodo. Donec varius feugiat mattis.</p>
      <svg height="80" width="160">
        <rect x="2" y="2" width="32" height="16" fill="#ccb68c" stroke="black" strokeWidth="1px" />
        <text x="42" y="14" className="legend__entry">Not permitted</text>
        <rect x="2" y="30" width="32" height="16" fill="#ffffaf" stroke="black" strokeWidth="1px"  />
        <text x="42" y="42" className="legend__entry">By special permit</text>
        <rect x="2" y="58" width="32" height="16" fill="#f0dd53" stroke="black" strokeWidth="1px"  />
        <text x="42" y="70" className="legend__entry">By right</text>
      </svg>
    </div>
    <div className="sidebar__item panel" id="item3">
      <h2 className="panel__title">Effective Dwelling Units per Acre</h2>
      <p className="panel__content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed interdum orci, ac ornare eros. Donec imperdiet sapien eu turpis malesuada sagittis eu eu mi. Mauris varius felis id lorem fermentum, eu tristique dolor condimentum. Praesent molestie justo et condimentum finibus. Phasellus venenatis lacinia augue quis volutpat. Cras malesuada orci eget felis ultricies commodo. Donec varius feugiat mattis.</p>
    </div>
    <div className="sidebar__item panel" id="item4">
      <h2 className="panel__title">Dwelling Units per Acre: ICC</h2>
      <p className="panel__content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed interdum orci, ac ornare eros. Donec imperdiet sapien eu turpis malesuada sagittis eu eu mi. Mauris varius felis id lorem fermentum, eu tristique dolor condimentum. Praesent molestie justo et condimentum finibus. Phasellus venenatis lacinia augue quis volutpat. Cras malesuada orci eget felis ultricies commodo. Donec varius feugiat mattis.</p>
    </div>
    <div className="sidebar__item panel" id="item5">
      <h2 className="panel__title">Density </h2>
      <p className="panel__content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed interdum orci, ac ornare eros. Donec imperdiet sapien eu turpis malesuada sagittis eu eu mi. Mauris varius felis id lorem fermentum, eu tristique dolor condimentum. Praesent molestie justo et condimentum finibus. Phasellus venenatis lacinia augue quis volutpat. Cras malesuada orci eget felis ultricies commodo. Donec varius feugiat mattis.</p>
    </div>
    <div className="sidebar__item panel" id="item6">
      <h2 className="panel__title">Effective FAR</h2>
      <p className="panel__content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed interdum orci, ac ornare eros. Donec imperdiet sapien eu turpis malesuada sagittis eu eu mi. Mauris varius felis id lorem fermentum, eu tristique dolor condimentum. Praesent molestie justo et condimentum finibus. Phasellus venenatis lacinia augue quis volutpat. Cras malesuada orci eget felis ultricies commodo. Donec varius feugiat mattis.</p>
    </div>
   </aside>
  );
}

export default Sidebar;

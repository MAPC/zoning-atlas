import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor odio nec urna mattis dignissim. Mauris vitae feugiat nibh, id ultricies arcu. Proin sit amet neque molestie, porta augue id, ultricies tellus. Sed erat lectus, elementum molestie congue id, venenatis at libero. Phasellus convallis lacus dui, ac elementum nibh vulputate eu. Vivamus in odio vitae massa sagittis pharetra quis id turpis. Fusce ullamcorper mi et lorem aliquet commodo sed vel libero. Integer ut diam congue, ultrices nisl sed, lobortis augue. </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor odio nec urna mattis dignissim. Mauris vitae feugiat nibh, id ultricies arcu. Proin sit amet neque molestie, porta augue id, ultricies tellus. Sed erat lectus, elementum molestie congue id, venenatis at libero. Phasellus convallis lacus dui, ac elementum nibh vulputate eu. Vivamus in odio vitae massa sagittis pharetra quis id turpis. Fusce ullamcorper mi et lorem aliquet commodo sed vel libero. Integer ut diam congue, ultrices nisl sed, lobortis augue. </p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

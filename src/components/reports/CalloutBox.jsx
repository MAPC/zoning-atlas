import React from 'react';
import triangleDownGreen from '../../images/triangleDownGreen.svg';

function setContent(content) {
  return content.map((item) => <p>{item}</p>);
}

const CalloutBox = ({ content }) => {
  const items = content.map((item) => (
    <>
      <div className="callout-box__subtitle-wrapper">
        <img src={triangleDownGreen} className="callout-box__triangle" />
        <h3 className="callout-box__subtitle">{item.title}</h3>
      </div>
      {setContent(item.content)}
    </>
  ));
  return (
    <aside className="callout-box__wrapper">
      <div className="callout-box">{items}</div>
    </aside>
  );
};

export default CalloutBox;

import React from 'react';
import './OtherComponent.css';

function OtherComponent(props) {
  return (<div className="Other-component">{props.children}</div>)
}

export default OtherComponent;
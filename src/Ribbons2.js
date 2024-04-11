import React from 'react';
import Row from './Row.js';

export default function Ribbons2(props) {
  return (
    <div className="Ribbons2">
      <p>FH 2"</p>
      {props.ribbons2.map((ribbon, index) => {
        return (
          <div key={index}>
            <Row ribbon={ribbon} />
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import Row from './Row.js';

export default function Ribbons(props) {
  return (
    <div className="Ribbons">
      <p>FH 1"</p>
      {props.ribbons.map((ribbon, index) => {
        return (
          <div key={index}>
            <Row ribbon={ribbon} />
          </div>
        );
      })}
    </div>
  );
}

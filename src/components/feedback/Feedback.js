import React from 'react';

export function Feedback({ options, feedbackEvent }) {
  return (
    <>
      {options.map(el => (
        <button key={el} name={el} onClick={event => feedbackEvent(event)}>
          {el}
        </button>
      ))}
    </>
  );
}

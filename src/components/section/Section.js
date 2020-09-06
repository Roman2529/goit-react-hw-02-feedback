import React from 'react';

export function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
}

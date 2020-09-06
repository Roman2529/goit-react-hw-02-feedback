import React from 'react';

export const Statistic = ({ good, neutral, bad, total, countPercentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPercentage}%</p>
    </>
  );
};

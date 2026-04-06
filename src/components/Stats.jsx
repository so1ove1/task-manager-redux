import React from 'react';

const Stats = ({ total, active, completed }) => {
  return (
    <div className="stats-block">
      <span>Всего: <b>{total}</b></span>
      <span>Активных: <b>{active}</b></span>
      <span>Завершено: <b>{completed}</b></span>
    </div>
  );
};

export default Stats;
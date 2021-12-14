import React from 'react';
import PropTypes from 'prop-types';
import s from './StatisticList.module.css';

export default function StatisticList({
  options,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={s.list}>
      {options.map(([key, value]) => (
        <li key={key} className={`${s.item} ${s[key]}`}>
          <p className={s.statName}>{key}</p>
          <span className={s.statResult}>{value}</span>
        </li>
      ))}
      <li key={'total'} className={`${s.item} ${s.total}`}>
        <p className={s.statName}>total</p>
        <span className={s.statResult}>{totalFeedback()}</span>
      </li>
      <li key={'positive'} className={`${s.item} ${s.positive}`}>
        <p className={s.statName}>positive</p>
        <span className={s.statResult}>{positiveFeedback()}%</span>
      </li>
    </ul>
  );
}

StatisticList.propTypes = {
  totalFeedback: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};

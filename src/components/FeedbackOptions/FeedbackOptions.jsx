import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';
import s from './FeedbackOption.module.css';

export default function FeedbackOptions({
  options,
  onIncreaseFbAmount,
  onDecreaseFbAmount,
}) {
  return (
    <>
      <ul className={s.list}>
        {options.map(([key, value]) => (
          <li key={key} className={s.item}>
            <Buttons
              fbName={key}
              fbAmount={value}
              onDecreaseFbAmount={onDecreaseFbAmount}
              onIncreaseFbAmount={onIncreaseFbAmount}
            ></Buttons>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  onIncreaseFbAmount: PropTypes.func.isRequired,
  onDecreaseFbAmount: PropTypes.func.isRequired,
};

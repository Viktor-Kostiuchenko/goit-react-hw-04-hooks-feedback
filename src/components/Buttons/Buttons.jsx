import React from 'react';
import PropTypes from 'prop-types';
import s from './Buttons.module.css';

export default function Buttons({
  fbName,
  fbAmount,
  onDecreaseFbAmount,
  onIncreaseFbAmount,
}) {
  return (
    <>
      <button
        className={s.button}
        onClick={() => onDecreaseFbAmount(fbName)}
        disabled={fbAmount === 0 && true}
      >
        -
      </button>
      <span className={s.name}>{fbName}</span>
      <button className={s.button} onClick={() => onIncreaseFbAmount(fbName)}>
        +
      </button>
    </>
  );
}

Buttons.propTypes = {
  fbName: PropTypes.string.isRequired,
  fbAmount: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ url }) {
  return <img className={s.img} src={url} alt="no feedbacks"></img>;
}

Notification.propTypes = {
  url: PropTypes.string.isRequired,
};

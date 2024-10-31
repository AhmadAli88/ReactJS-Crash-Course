import PropTypes from 'prop-types';
const Card = ({ children, bg = 'bg-gray-100 ' }) => {
  return <div className={`${bg} p-6 rounded-md shadow-md`}>{children}</div>;
};

export default Card;

Card.propTypes = {
  children: PropTypes.object,
  bg: PropTypes.string,
};

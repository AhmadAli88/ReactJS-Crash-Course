import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto', // Center horizontally
  marginTop: '100px', // Center vertically by offset from top
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;

Spinner.propTypes = {
  loading: PropTypes.bool,
};

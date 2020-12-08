import React from 'react';
import PropTypes from 'prop-types';

const ResponseMessage = ({ success }) => {
  const response = {
    true: 'Thank you for your submission.',
    false: 'Something went wrong; please try again.',
  };

  return (
    <span className="edits__submission-result">{response[success]}</span>
  );
};

ResponseMessage.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default ResponseMessage;

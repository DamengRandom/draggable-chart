import React from "react";
import PropTypes from 'prop-types';

export default function Option({ key, value, text }) {
  return (
    <option key={key} value={value}>
      {text}
    </option>
  );
}

Option.propTypes = {
  key: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
};

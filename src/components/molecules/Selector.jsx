import React from "react";
import PropTypes from 'prop-types';
// components
import Option from "../atoms/Option";

export default function Selector({ maxScale, handleOptionSelect }) {
  const defaultOptions = [0, 10, 15, 20];
  return (
    <div>
      <label>Y-Axis Maximum: </label>
      <select id="yAxisSelector" value={maxScale} onChange={handleOptionSelect}>
        {defaultOptions.map((option) => (
          <Option
            key={option}
            value={option}
            text={option === 0 ? "Select an maxmium value" : option.toString()}
          />
        ))}
      </select>
    </div>
  );
}

Selector.propTypes = {
  maxScale: PropTypes.number,
  handleOptionSelect: PropTypes.func
};

import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const XYAxis = styled.ol`
  list-style-type: none;
  counter-reset: marker ${(props) => props.size || 16};
  position: relative;
  margin-top: 40px;

  li {
    list-style-type: none;
  }

  li {
    height: 10px;
    border-top: 1px solid #000;
    box-sizing: border-box;
    width: 8px;
    counter-increment: marker -1;
    position: relative;
    border-right: 2px solid #000;
  }

  li:first-child,
  li:nth-child(5n) {
    width: 8px;
  }

  li:nth-child(${(props) => props.size || 16}) {
    height: 0;
    width: 0;
    border: none;
  }

  li:first-child::after,
  li:nth-child(5n + 1)::after {
    position: absolute;
    top: -8px;
    right: 100%;
    height: 10px;
    line-height: 10px;
    width: 16px;
    text-align: center;
    content: counter(marker);
  }

  .x-axis {
    width: 310px;
    border-top: 1px solid #000;
  }
`;

export default function Axes({ size, children }) {
  const generateScales = (size) => {
    // this function is for generate the Y axis scales
    const sizeArray = [];
    for (let i = 0; i < size; i++) {
      sizeArray.push(i);
    }
    return sizeArray.map((sa) => <li key={sa}></li>);
  };

  return (
    <XYAxis size={size} reversed>
      {size > 1 && generateScales(size)}
      <div className="x-axis"></div>
      {/* above div is x-axis line */}
      {children}
    </XYAxis>
  );
}

Axes.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node
};

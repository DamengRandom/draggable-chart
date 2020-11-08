import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const BarWrapper = styled.div`
  display: flex;
  max-width: 310px;
  position: absolute;
  top: 0px;
`;

const Bar = styled.div`
  margin-left: 20px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-left: 30px;
  }
`;

const DraggerWrapper = styled.div`
  cursor: pointer;
  background-color: #aaa;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 1px;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:before {
    content: "${(props) => props.currentValue}";
    display: block;
    margin: 0 auto;
    position: relative;
    top: -10px;
    text-align: center;
  }
`;

export default function Histogram({
  maxScale,
  currentValues,
  handleValueDisplay,
}) {
  return (
    <BarWrapper>
      {currentValues.map((d, index) => (
        <Bar key={`bar-${index}`} width={50} height={Number(maxScale) * 10}>
          <div
            id={`noColorBar-${index}`}
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: `${100 - (d / maxScale) * 100}%`,
            }}
          ></div>
          <DraggerWrapper
            currentValue={`${currentValues[index]}`}
            id={`dragger-${index}`}
            onClick={() => handleValueDisplay(index)}
          ></DraggerWrapper>
          <div
            id={`colorBar-${index}`}
            style={{
              backgroundColor: "#2d97de",
              width: "100%",
              height: `${(d / maxScale) * 100}%`,
            }}
          ></div>
        </Bar>
      ))}
    </BarWrapper>
  );
}

Histogram.propTypes = {
  maxScale: PropTypes.number,
  currentValues: PropTypes.array,
  handleValueDisplay: PropTypes.func,
};

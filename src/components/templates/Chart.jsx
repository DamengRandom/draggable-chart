import React, { useState } from "react";
// constants
import { barValues, errorMessage } from "../../constants";
// helper function
import draggableBar from "../../utils/draggableBar";
// components
import Axes from "../organisms/Axes";
import Selector from "../molecules/Selector";
import Histogram from "../molecules/Histogram";

const Chart = () => {
  const [maxScale, setMaxScale] = useState(0);
  const [shown, setShown] = useState(false);
  const [currentValues, setCurrentValues] = useState(barValues);

  const handleOptionSelect = (event) => {
    setCurrentValues(barValues); // reset to default in case the number is out of current maximum value scope
    setMaxScale(event.target.value);
    handleDrag(event);
  };

  const handleDrag = (event) => {
    if (event.target.value > 0) {
      setTimeout(() => {
        setShown(true);
        for (let i = 0; i < barValues.length; i++) {
          draggableBar(`dragger-${i}`, `noColorBar-${i}`, `colorBar-${i}`);
        }
      }, 100); // ensure DOM is ready before shown !!
    }
  };

  const handleValueDisplay = (index) => {
    let currentBarValue = parseFloat(
      document.querySelector(`#colorBar-${index}`).style.height.split("px")[0]
    );
    let newBarValues = [...currentValues];
    newBarValues[index] = Math.round(currentBarValue / 10);
    setCurrentValues(newBarValues);
  };

  return (
    <div className="text-center">
      <Selector maxScale={maxScale} handleOptionSelect={handleOptionSelect} />
      {shown &&
        (Number(maxScale) > 1 ? (
          <Axes size={Number(maxScale) + 1}>
            <Histogram
              maxScale={maxScale}
              currentValues={currentValues}
              handleValueDisplay={handleValueDisplay}
            />
          </Axes>
        ) : (
          <p>{errorMessage}</p>
        ))}
    </div>
  );
};

export default Chart;

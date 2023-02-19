import React, {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "./MultiRange.css"
import { useEffect } from "react";

const MultiRange = () => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(100);
  const handleInput = (e) => {
	  set_minValue(e.minValue);
	  set_maxValue(e.maxValue);
};


  useEffect(() => {

  }, [minValue, maxValue])

  return( 
    <div>
      <div className="range">
        <MultiRangeSlider
          min={0}
          max={100}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          barInnerColor = "#0ccac4"
          onInput={(e) => {
            handleInput(e);
          }}
        />
        <h2>minValue: {minValue}</h2>
        <h2>maxValue: {maxValue}</h2>
	</div>
    </div>
  )
}

export default MultiRange;
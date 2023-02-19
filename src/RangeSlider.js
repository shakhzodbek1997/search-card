import React from "react";

const RangeSlider = ({ step, min, max, value, onChange }) => {
  const [minValue, setMinValue] = React.useState(value ? value.min : min);
  const [maxValue, setMaxValue] = React.useState(value ? value.max : max);

  React.useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (event) => {
    event.preventDefault();
    const newMinVal = Math.min(+event.target.value, maxValue - step);
    if (!value) {
      setMinValue(newMinVal);
    }
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (event) => {
    event.preventDefault();
    const newMaxVal = Math.max(+event.target.value, minValue + step);
    if (!value) {
      setMaxValue(newMaxVal);
    }
    onChange({
      min: minValue,
      max: newMaxVal,
    });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <input
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div class="control-wrapper">
        <div class="control" style={{ left: `${minPos}%` }} />
        <div class="rail">
          <div
            class="inner-rail"
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div class="control" style={{ left: `${maxPos}%` }} />
      </div>
    </div>
  );
};

export default RangeSlider;

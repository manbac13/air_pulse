import React from "react";
import { healthLevels } from "../../Utils/calculateAqi";

const AQISlider = ({ value = 0, onChange }) => {
  const getHealthConcern = (aqi) => {
    for (const { range, color } of healthLevels) {
      if (aqi >= range[0] && aqi <= range[1]) {
        return color;
      }
    }
    return "#000000";
  };

  const currentColor = getHealthConcern(value);

  const sliderStyles = {
    container: {
      width: "100%",
      position: "relative",
    },
    slider: {
      WebkitAppearance: "none",
      width: "100%",
      height: "8px",
      borderRadius: "4px",
      outline: "none",
      padding: "0",
      margin: "0",
      background: `linear-gradient(to right,
        #4caf50 0%,
        #4caf50 10%,
        #ffeb3b 20%,
        #ff9800 40%,
        #f44336 60%,
        #e91e63 80%,
        #9c27b0 100%
      )`,
    },
    thumb: {
      "--thumb-color": currentColor,
    },
    valueLabel: {
      position: "absolute",
      top: "-25px",
      left: `${(value / 500) * 100}%`,
      transform: "translateX(-50%)",
      background: currentColor,
      color: "#fff",
      padding: "2px 8px",
      borderRadius: "4px",
      fontSize: "14px",
    },
  };

  const sliderRules = `
    .aqi-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--thumb-color);
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .aqi-slider::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--thumb-color);
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `;

  return (
    <div style={sliderStyles.container}>
      <style>{sliderRules}</style>
      <input
        type="range"
        className="aqi-slider"
        min={0}
        max={500}
        value={value}
        onChange={onChange}
        style={{ ...sliderStyles.slider, ...sliderStyles.thumb }}
      />
    </div>
  );
};

export default AQISlider;

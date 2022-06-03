import React from "react";
import propTypes from "prop-types";

function ForecastSummary({ date, temperature, description, icon }) {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date"> {date} </div>
      <div className="forecast-summary__icon"> {icon} </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description"> {description} </div>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: propTypes.number.isRequired,
  temperature: propTypes.shape({
    min: propTypes.number,
    max: propTypes.number,
  }).isRequired,
  description: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

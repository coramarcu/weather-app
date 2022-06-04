import React from "react";
import propTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  forecasts: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.number.isRequired,
      description: propTypes.string.isRequired,
      icon: propTypes.string.isRequired,
      temperature: propTypes.shape({
        min: propTypes.number.isRequired,
        max: propTypes.number.isRequired,
      }),
    }).isRequired
  ).isRequired,
};

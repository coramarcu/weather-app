import "../styles/App.css";
import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App({ location, forecasts }) {
  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  location: propTypes.shape({
    city: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
  }).isRequired,
  forecasts: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.number,
      description: propTypes.string,
      icon: propTypes.string,
      temperature: propTypes.shape({
        max: propTypes.number,
        min: propTypes.number,
      }),
    })
  ).isRequired,
};

export default App;

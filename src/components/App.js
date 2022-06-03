import "../styles/App.css";
import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
    </div>
  );
}

App.propTypes = {
  location: propTypes.shape({
    city: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
  }).isRequired,
};

export default App;

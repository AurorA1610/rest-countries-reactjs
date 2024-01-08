import React from "react";
import "./Country.css";

const Country = (props) => {
  const { flags, name, capital, region } = props.country; //destructuring country array
  return (
    <div className="country">
      <img src={flags.png} alt={props.country.flags.alt} />
      <h3>{name.common}</h3>
      <h4>Capital: {capital}</h4>
      <p>Continent: {region}</p>
    </div>
  );
};

export default Country;

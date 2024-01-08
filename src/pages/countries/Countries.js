import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  return (
    <div className="countries">
      <h1>Roaming around the world!!</h1>
      <h2>Total Countries: {countries.length}</h2>
      <div className="countries-container">
      {countries.map((country) => (
        <Country key={country.flag} country={country}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;

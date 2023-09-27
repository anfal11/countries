import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // Function to toggle visited status
  const handleVisitedToggle = (country, isVisited) => {
    if (isVisited) {
      setVisitedCountries([...visitedCountries, country]);
    } else {
      const filteredVisitedCountries = visitedCountries.filter(
        (visitedCountry) => visitedCountry.cca2 !== country.cca2
      );
      setVisitedCountries(filteredVisitedCountries);
    }
    // console.log(visitedCountries);
  };

  return (
    <div>
           <h1 className="text-2xl font-semibold text-center">Flags</h1> <br/> <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {visitedCountries.map((country) => (
          <img
            key={country.cca2}
            src={country.flags.png} // Use the correct property for the flag image URL
            alt={country.name.common}
            className="mb-10"
          />
        ))}
      </div>
      
      <h3 className="text-2xl font-semibold text-center">
        Total Countries: {countries.length}
      </h3>
      <div>
        <h5>Visited Countries</h5>

        {/* <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca2}>{country.name.common}</li>
          ))}
        </ul> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {countries.map((country) => (
          <Country country={country} onVisitedToggle={handleVisitedToggle} key={country.cca2}></Country>
        ))}
      </div>
      </div>
  );
};

export default Countries;

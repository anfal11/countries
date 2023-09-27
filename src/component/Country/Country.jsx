import { useState } from "react";

const Country = ({ country, onVisitedToggle}) => {
  const { name, flags, area } = country;
    const [visited, setVisited] =useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        onVisitedToggle(country, !visited);
    }
    // const [visitedCountry, setVisitedCountry] =useState(country.flags.png);
    // const handleVisitedCountry = () => {
    // console.log("clicked");
    // setVisitedCountry(visitedCountry[0]);
    // }
// console.log(country);
  return (
    <div className="text-center border border-1 border-sky-500 p-4 rounded-md m-4">
      <h3>
        <span className="font-medium">Country Name: </span>
        <span className="underline">{name?.common} </span>
      </h3>
      <h4>
        <span className="font-medium">Capital:</span> {country?.capital}
      </h4>
      <h4>
        <span className="font-medium">Region:</span> {country?.region}
      </h4>
      <h4>
        <span className="font-medium">Population:</span> {country?.population}
      </h4>
      <h4>
        <span className="font-medium">Area:</span> {area}
      </h4>
      <h4>
        <span className="font-medium">Code:</span> {country.cca2}
      </h4>
      <img className="mx-auto py-6 object-cover w-full" src={flags.png} />

      <button className="btn btn-accent m-2">Mark visited </button>

      <button className="btn btn-accent m-2" onClick={handleVisited}> {visited? 'Visited' : 'Going'}</button> <br/>
      {/* {visited && 'You have visited ' + name.common} */}
      {visited ? 'You have visited ' + name.common : 'I want to visit ' + name.common}
    </div>
  );
};

export default Country;

import React from "react";

const UniversityDetails = ({ university }) => {
  return (
    <div>
      <h2>University Details</h2>
      <p>Name: {university.name}</p>
      <p>Country: {university.country}</p>
      <p>Website: {university.web_pages}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default UniversityDetails;

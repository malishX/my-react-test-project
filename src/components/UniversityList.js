import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUniversities } from "../services/UniversityService";
import {
  sortUniversities,
  searchUniversities,
  deleteUniversity,
} from "../controllers/UniversityController";
import "./UniversityList.css";

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);
  const [sortedUniversities, setSortedUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUniversities();
        setUniversities(data);
        setSortedUniversities(data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchData();
  }, []);

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    const sorted = sortUniversities([...sortedUniversities], newSortOrder);
    setSortedUniversities(sorted);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const searched = searchUniversities([...universities], term);
    setSortedUniversities(searched);
  };

  const handleDelete = (id) => {
    const updatedList = deleteUniversity([...universities], id);
    setUniversities(updatedList);
    setSortedUniversities(updatedList);
  };

  return (
    <div className="university-list-container">
      <h1>University List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSort}>
        Sort {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>
      <ul>
        {sortedUniversities.map((university, index) => (
          <li key={university.id}>
            <span>{university.name}</span>
            <Link to={`/details/${university.id}`}>Details</Link>
            <button onClick={() => handleDelete(university.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;

export const fetchUniversities = async () => {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch universities");
    }
    const data = await response.json();
    localStorage.setItem("universities", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error fetching universities:", error);
    // Attempt to fetch data from local storage
    const cachedData = localStorage.getItem("universities");
    if (cachedData) {
      console.log("Using cached data from local storage");
      return JSON.parse(cachedData);
    } else {
      console.error("No data available in local storage");
      throw error;
    }
  }
};

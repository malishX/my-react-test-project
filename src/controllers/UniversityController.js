export const sortUniversities = (universities, sortOrder) => {
  return sortOrder === "asc"
    ? universities.sort((a, b) => a.name.localeCompare(b.name))
    : universities.sort((a, b) => b.name.localeCompare(a.name));
};

export const searchUniversities = (universities, searchTerm) => {
  return universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const deleteUniversity = (universities, universityId) => {
  return universities.filter((university) => university.id !== universityId);
};

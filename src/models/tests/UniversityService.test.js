import { fetchUniversities } from "../UniversityService";

test("fetchUniversities retrieves data from API", async () => {
  const universities = await fetchUniversities();
  expect(universities.length).toBeGreaterThan(0);
});

import { deleteUniversity } from "../UniversityController";

test("deleteUniversity removes item from list", () => {
  const universities = [
    { id: 1, name: "University 1" },
    { id: 2, name: "University 2" },
    { id: 3, name: "University 3" },
  ];
  const updatedList = deleteUniversity(universities, 2);
  expect(updatedList.length).toBe(2);
  expect(updatedList.find((u) => u.id === 2)).toBeUndefined();
});

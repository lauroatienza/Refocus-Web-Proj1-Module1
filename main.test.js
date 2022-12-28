import { sort, search, searchResultArray } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search(searchResultArray)).toEqual(["What films should an aspiring journalist watch?"]);
});
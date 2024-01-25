import renderData from "./renders/renderData.js";
import renderNewData from "./renders/renderNewData.js";
import sortByOption from "./filter_sort/sortByOption.js";
import filterByOption from "./filter_sort/filterByOption.js";

const selectInclude = document.getElementById("select-include");
const selectExclude = document.getElementById("select-exclude");
const selectSort = document.getElementById("select-sort");
const newDataBtn = document.getElementById("new-data-btn");

const dataPath = "./data/allData.json";
renderData(dataPath, "0");

newDataBtn.addEventListener("click", () => {
  renderNewData(dataPath);
});

function handleSelectChange(selectElement, conditionType) {
  const selectedOption = selectElement.value;
  if (selectedOption) {
    conditionType === "sort"
      ? sortByOption(selectedOption)
      : filterByOption(selectedOption, conditionType);
  }
}

selectInclude.addEventListener("change", () =>
  handleSelectChange(selectInclude, "include")
);
selectExclude.addEventListener("change", () =>
  handleSelectChange(selectExclude, "exclude")
);
selectSort.addEventListener("change", () =>
  handleSelectChange(selectSort, "sort")
);

export { selectInclude, selectExclude, selectSort };

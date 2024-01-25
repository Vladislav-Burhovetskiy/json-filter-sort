import renderResultData from "../renders/renderResultData.js";
import { getCurrentData, getFilteredData } from "../helpers/stateHelpers.js";

function sortByOption(option) {
  const resultData = getFilteredData() ? getFilteredData() : getCurrentData();

  if (option === "reset") {
    renderResultData(resultData);
    return;
  }

  const sortData = [...resultData];

  sortData.sort((a, b) => {
    const valueA = a[option];
    const valueB = b[option];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB);
    }

    return valueA - valueB;
  });

  renderResultData(sortData);
}

export default sortByOption;

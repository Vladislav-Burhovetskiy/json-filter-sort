import renderResultData from "../renders/renderResultData.js";
import {
  getCurrentData,
  getFilteredData,
  getCurrentCondition,
} from "../helpers/stateHelpers.js";

function filterByOption(option, conditionType) {
  const currentData = getCurrentData();
  const currentCondition = getCurrentCondition();

  if (option === "reset") {
    renderResultData(currentData);
    getFilteredData(currentData);
    return;
  }

  const conditions = currentCondition[conditionType];

  if (conditions) {
    let filteredData;

    switch (conditionType) {
      case "include":
        filteredData = filterInclude(option, conditions, currentData);
        break;
      case "exclude":
        filteredData = filterExclude(option, conditions, currentData);
        break;
      default:
        break;
    }

    filteredData && filteredData.length > 0
      ? renderResultData(filteredData)
      : renderResultData(["There are no data matching the conditions"]);
    getFilteredData(filteredData);
  }
}

function filterInclude(option, conditions, data) {
  if (option === "all") {
    return data.filter((item) =>
      conditions.every((condition) => matchesCondition(item, condition))
    );
  } else {
    const foundCondition = findCondition(option, conditions);
    return foundCondition
      ? data.filter((item) => matchesCondition(item, foundCondition))
      : [];
  }
}

function filterExclude(option, conditions, data) {
  if (option === "all") {
    return data.filter((item) =>
      conditions.every((condition) => !matchesCondition(item, condition))
    );
  } else {
    const foundCondition = findCondition(option, conditions);
    return foundCondition
      ? data.filter((item) => !matchesCondition(item, foundCondition))
      : [];
  }
}

function matchesCondition(item, condition) {
  const key = Object.keys(condition)[0];
  return item[key] === condition[key];
}

function findCondition(option, conditions) {
  return conditions.length === 1
    ? conditions[0]
    : conditions.find((condition) => condition.hasOwnProperty(option));
}

export default filterByOption;

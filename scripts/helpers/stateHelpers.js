let resultData;
let currentData;
let currentCondition;

function getCurrentData(data) {
  currentData = updateValue(currentData, data);
  return currentData;
}

function getFilteredData(data) {
  resultData = updateValue(resultData, data);
  return resultData;
}

function getCurrentCondition(condition) {
  currentCondition = updateValue(currentCondition, condition);
  return currentCondition;
}

function updateValue(variable, newValue) {
  if (newValue) {
    variable = newValue;
  }

  return variable;
}

export { getCurrentData, getFilteredData, getCurrentCondition };

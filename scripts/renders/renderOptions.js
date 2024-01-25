import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter.js";
import disableSelect from "../helpers/disableSelect.js";
import { selectInclude, selectExclude, selectSort } from "../main.js";

function createOptions(condition, select) {
  select.innerHTML =
    condition.length > 1
      ? `<option disabled selected>Select</option>
         <option value="all">All</option>`
      : `<option disabled selected>Select</option>`;

  condition.forEach((item) => {
    const option = document.createElement("option");

    if (typeof item === "object") {
      const keys = Object.keys(item);
      option.value = keys[0];
      option.text = capitalizeFirstLetter(keys[0]);
    } else {
      option.value = item;
      option.text = capitalizeFirstLetter(item);
    }

    select.add(option);
  });

  select.innerHTML += `<option value="reset">RESET</option>`;
}

function renderOptions(condition) {
  const { include, exclude, sortBy } = condition;

  disableSelect(!sortBy, selectSort);
  disableSelect(include && include.length > 0, selectExclude);
  disableSelect(exclude && exclude.length > 0, selectInclude);

  if (include && !include.disabled) {
    createOptions(include, selectInclude);
  }

  if (exclude && !exclude.disabled) {
    createOptions(exclude, selectExclude);
  }

  if (sortBy && !sortBy.disabled) {
    createOptions(sortBy, selectSort);
  }
}

export default renderOptions;

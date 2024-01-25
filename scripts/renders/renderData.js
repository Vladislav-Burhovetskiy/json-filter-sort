import fetchData from "../helpers/fetchData.js";
import getRandomDataNumber from "../helpers/getRandomDataNumber.js";
import renderResultData from "./renderResultData.js";
import renderOptions from "./renderOptions.js";
import {
  getCurrentData,
  getCurrentCondition,
} from "../helpers/stateHelpers.js";

const incomeData = document.getElementById("income-data");

function renderData(path, index) {
  fetchData(path)
    .then((data) => {
      const { allData } = data;
      const randomDataNumber = getRandomDataNumber(allData.length - 1);
      const dataIndex = index ? +index : randomDataNumber;

      incomeData.innerText = JSON.stringify(allData[dataIndex], null, 2);
      renderResultData(allData[dataIndex].data);
      renderOptions(allData[dataIndex].condition);
      getCurrentData(allData[dataIndex].data);
      getCurrentCondition(allData[dataIndex].condition);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export default renderData;

const resultDataEl = document.getElementById("result-data");

function renderResultData(data) {

  const resultData = { result: data }
  resultDataEl.innerText = JSON.stringify(resultData, null, 2);
}

export default renderResultData;
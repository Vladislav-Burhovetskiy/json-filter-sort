function disableSelect(condition, select) {
  if (condition) {
    select.disabled = true;
  } else {
    select.disabled = false;
  }
}

export default disableSelect;

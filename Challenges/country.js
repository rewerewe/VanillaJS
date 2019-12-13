// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const country = document.querySelector(".js-country"),
  options = country.querySelectorAll(".js-country option");

const COUNTRY_LS = "country",
  SELECTED_CN = "selected";

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function selectCountry() {
  country.addEventListener("change", function(event) {
    const currentValue = event.target.value;
    saveCountry(currentValue);
  });
}

function showingCountry(text) {
  for (const option of options) {
    if (text === option.value) {
      option.setAttribute(SELECTED_CN, SELECTED_CN);
    }
  }
}

function loadCountry() {
  const selectedCountry = localStorage.getItem(COUNTRY_LS);

  if (selectedCountry === null) {
    selectCountry();
  } else {
    showingCountry(selectedCountry);
  }
}

function init() {
  loadCountry();
}

init();

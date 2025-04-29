/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
let convertBtn = document.getElementById("convert-btn");
let inputField = document.getElementById("input");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");
let errorMessage = document.getElementById("error-message");

convertBtn.addEventListener("click", function () {
  let baseValue = inputField.value;
  if (isNaN(baseValue)) {
    errorMessage.style.display = "inline";
    return;
  } else {
    errorMessage.style.display = "none";
  }
  lengthEl.textContent = `${baseValue} meters = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(
    3
  )} meters`;
  volumeEl.textContent = `${baseValue} liters = ${(
    baseValue * literToGallon
  ).toFixed(3)} galoons | ${baseValue} galoons = ${(
    baseValue / literToGallon
  ).toFixed(3)} liters`;
  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * kilogramToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue / kilogramToPound
  ).toFixed(3)} kilos`;
});

function isNumberKey(e) {
  var charCode = e.which ? e.which : e.keyCode;
  const isNumber = !(charCode > 31 && (charCode < 48 || charCode > 57));

  if (!isNumber) {
    errorMessage.style.display = "inline";
  }
  return isNumber;
}
inputField.addEventListener("keypress", isNumberKey);

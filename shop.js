document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("convertBtn");
  convertButton.addEventListener("click", convertUnits);

  function convertUnits() {
      const value = parseFloat(document.getElementById("value").value);
      const fromUnit = document.getElementById("fromUnit").value;
      const toUnit = document.getElementById("toUnit").value;
      let result;

      // Conversion logic for various units
      if (fromUnit === "km" && toUnit === "m") {
          result = value * 1000;
      } else if (fromUnit === "km" && toUnit === "mph") {
          result = value / 1.60934;
      } else if (fromUnit === "km" && toUnit === "cm") {
          result = value * 100000;
      } else if (fromUnit === "m" && toUnit === "km") {
          result = value / 1000;
      } else if (fromUnit === "m" && toUnit === "mph") {
          result = value / 1609.344;
      } else if (fromUnit === "m" && toUnit === "cm") {
          result = value * 100;
      } else if (fromUnit === "mph" && toUnit === "km") {
          result = value * 1.60934;
      } else if (fromUnit === "mph" && toUnit === "m") {
          result = value * 1609.344;
      } else if (fromUnit === "mph" && toUnit === "cm") {
          result = value * 160934.4;
      } else if (fromUnit === "cm" && toUnit === "km") {
          result = value / 100000;
      } else if (fromUnit === "cm" && toUnit === "m") {
          result = value / 100;
      } else if (fromUnit === "cm" && toUnit === "mph") {
          result = value / 160934.4;
      } else if (fromUnit === "s" && toUnit === "min") {
          result = value / 60;
      } else if (fromUnit === "min" && toUnit === "s") {
          result = value * 60;
      } else if (fromUnit === "kg" && toUnit === "lb") {
          result = value * 2.20462;
      } else if (fromUnit === "kg" && toUnit === "g") {
          result = value * 1000;
      } else if (fromUnit === "lb" && toUnit === "kg") {
          result = value / 2.20462;
      } else if (fromUnit === "lb" && toUnit === "g") {
          result = value * 453.592;
      } else if (fromUnit === "g" && toUnit === "kg") {
          result = value / 1000;
      } else if (fromUnit === "g" && toUnit === "lb") {
          result = value / 453.592;
      } else {
          result = "Conversion not supported";
      }

      if (!isNaN(result)) {
          document.getElementById("resultText").textContent = `${value} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
      } else {
          document.getElementById("resultText").textContent = "Invalid input or conversion not supported.";
      }
  }
});
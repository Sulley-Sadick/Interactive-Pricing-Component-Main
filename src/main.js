/* imported styles */
import "./style.css";

/* Activate Strict Mode  */
("use strict");

/* Selecting elements */
const pageViews = document.getElementById("page-views");
const rangeSlider = document.getElementById("range-slider");
const price = document.getElementById("billing-amount");
const toggle = document.getElementById("toggle-button");
const discountText = document.getElementById("discount-text");

// State Variables
let finalPrice;

// PriceList array to represent the range values
const priceList = [8, 12, 16, 24, 36];

// Funtion: To update textContent
const updateTextContent = (element, text) => {
  element.textContent = text;
};

// Function: To update page-views, price and background of the range slider
const updatePageViews_Price_Background = () => {
  // Getting slider value from the range slider and converting it into a number
  const sliderIndex = parseInt(rangeSlider.value);

  //Linking the values with the priceList array
  const basePrice = priceList[sliderIndex];

  // Updating pageViews base on price
  const viewsMap = {
    8: "10k PAGEVIEWS",
    12: "50k PAGEVIEWS",
    16: "100k PAGEVIEWS",
    24: "500k PAGEVIEWS",
    36: "1M PAGEVIEWS",
  };

  updateTextContent(pageViews, viewsMap[basePrice]);

  //Calculating value that would be used to change the background
  const value =
    ((rangeSlider.value - rangeSlider.min) /
      (rangeSlider.max - rangeSlider.min)) *
    100;

  // updating the background with the value calculated
  const bgColor = `linear-gradient(90deg, hsl(174, 77%, 80%)${value}%, hsl(224, 65%, 95%)${value}%)`;

  rangeSlider.style.background = bgColor;

  const isDiscount = toggle.checked;

  if (isDiscount) {
    finalPrice = basePrice * 0.75;
    updateTextContent(discountText, "-25%");
  } else {
    finalPrice = basePrice;
    updateTextContent(discountText, "0%");
  }

  updateTextContent(price, `$${finalPrice.toFixed(2)}`);
};

rangeSlider.addEventListener("input", updatePageViews_Price_Background);

toggle.addEventListener("input", updatePageViews_Price_Background);

updatePageViews_Price_Background();

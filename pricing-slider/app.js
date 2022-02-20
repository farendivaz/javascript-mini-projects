const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const sliderFilled = document.querySelector(".slider-filled");
const selector = document.querySelector(".selector");
const pageViews = document.querySelector(".page-views");
const billingType = document.querySelector(".billing-type");

const getPrice = () => {
  if (billingType.checked) {
    const discountPrice = slider.value * 0.75;
    sliderValue.innerHTML = discountPrice.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
    return;
  }
  const price = parseInt(slider.value);
  sliderValue.innerHTML = price.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });
};

slider.addEventListener("input", () => {
  getPrice();
  if (parseInt(slider.value) === 0) {
    const freeVersion = 10000;
    pageViews.innerHTML = freeVersion.toLocaleString();
  } else {
    const newValue = slider.value * 100000;
    pageViews.innerHTML = newValue.toLocaleString();
  }

  const maxValue = slider.getAttribute("max");
  const percentage = (slider.value / maxValue) * 100;
  sliderFilled.style.width = `${percentage}%`;
  selector.style.left = `${percentage}%`;
  selector.style.transform = `translateX(-${percentage}%)`;
});

billingType.addEventListener("change", () => {
  getPrice();
});

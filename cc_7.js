const headlineInput = document.querySelector("#headline-input");
const updateButton = document.querySelector("#update-button");
const ctaHeadline = document.querySelector("#cta-headline");

updateButton.addEventListener("click", function () {
  const newHeadline = headlineInput.value.trim();

  if (newHeadline !== "") {
    ctaHeadline.textContent = newHeadline;
    headlineInput.value = "";
  } else {
    ctaHeadline.textContent = "Please enter a new headline before clicking update.";
  }
});
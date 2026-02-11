const payMethod = document.getElementById("payMethod");
const upiField = document.getElementById("upiField");
const paymentForm = document.getElementById("paymentForm");
const paySuccess = document.getElementById("paySuccess");

payMethod.addEventListener("change", () => {
  if (payMethod.value === "upi") {
    upiField.classList.remove("hidden");
  } else {
    upiField.classList.add("hidden");
  }
});

paymentForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Demo payment success
  paySuccess.style.display = "block";

  setTimeout(() => {
    paymentForm.reset();
    upiField.classList.add("hidden");
  }, 1000);
});

function selectUPI(appName) {
  alert("Redirecting to " + appName + " for payment...");

  // Demo redirect (you can change to real payment gateway later)
  setTimeout(() => {
    window.location.href = "payment-success.html";
  }, 800);
}

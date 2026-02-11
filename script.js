document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Demo validation (NOT secure - frontend only)
  if(email === "admin@gmail.com" && password === "123456") {
    alert("Login Successful! Welcome to Private Community.");
  } else {
    alert("Invalid email or password!");
  }
});

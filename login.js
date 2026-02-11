
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "prav.admin@gmail.com" && password === "1230") {
    alert("login");
    // Optional: redirect
    // window.location.href = "adminpage.html";
    window.location.href = "admin.html";

  } 
  
   else if (email === true) {
     alert("login");
    // Optional: redirect
    // window.location.href = "dashboardpage.html";
    window.location.href = "dashboardpage.html";
  }
  else if(email === "ravi@gmail.com" && password === "123") {
    alert("login");
    // Optional: redirect
    // window.location.href = "ravipage.html";
    window.location.href = "ravi.html";
  } 
  // Sneha
   else if(email === "sneha@gmail.com" && password === "sss") {
    alert("login");
    // Optional: redirect
    // window.location.href = "snehapage.html";
    window.location.href = "sneha.html";
  } 

  
  else {
    alert("wrong password");
  }
function login() {
  const username = document.getElementById("username").value;

  // After successful login
  localStorage.setItem("currentUser", username); 
  window.location.href = "dashboardpage.html";
}
}


function loginUser() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  // ================= ADMIN LOGIN =================
  if (email === "admin@gmail.com" && password === "admin123") {
    localStorage.clear(); // optional but safe
    localStorage.setItem("currentUser", "Admin");

    alert("Admin login success");
    window.location.href = "adminpage.html";
    return;
  }

  // ================= RAVI LOGIN =================
  if (email === "ravi@gmail.com" && password === "101") {
    localStorage.clear();
    localStorage.setItem("currentUser", "Flat-101");

    alert("Ravi login success");
    window.location.href = "ravimsg.html";
    return;
  }

  // ================= SNEHA LOGIN =================
  if (email === "sneha@gmail.com" && password === "103") {
    localStorage.clear();
    localStorage.setItem("currentUser", "Flat-103");

    alert("Sneha login success");
    window.location.href = "snehamsg.html";
    return;
  }

  alert("❌ Invalid login details");
}

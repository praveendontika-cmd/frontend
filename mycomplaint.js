const flat = localStorage.getItem("currentUser"); // Flat-101 or Flat-103

if (!flat) {
  alert("User not logged in");
  window.location.href = "raiseComplaint.html";
}

fetch(`http://localhost:3000/api/complaints/user/${flat}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // show complaints in UI
  });

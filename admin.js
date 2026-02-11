function checkUserAndRedirect(name, flat) {
  if (name.toLowerCase() === "ravi" && flat === "101") {
    // Save current user
    localStorage.setItem("currentUser", "Flat-101");

    // Redirect to Ravi's message page
    window.location.href = "ravimsg.html";
    function loginUser() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const flat = document.getElementById("flat").value.trim();

  if (name === "ravi" && flat === "101") {
    localStorage.setItem("currentUser", "Flat-101");
    window.location.href = "ravimsg.html";

  } else if (name === "snega" && flat === "103") {
    localStorage.setItem("currentUser", "Flat-103");
    window.location.href = "snegamsg.html";

  } else {
    alert("Invalid name or flat number");
  }
}

  } else {
    alert("User not recognized or wrong flat number");
  }
}


function updateStatus(index, newStatus) {
  let complaints = JSON.parse(localStorage.getItem("allComplaints")) || [];
  
  complaints[index].status = newStatus;
  localStorage.setItem("allComplaints", JSON.stringify(complaints));

  // 🔔 AUTO SEND MESSAGE WHEN RESOLVED
  if (newStatus === "Resolved") {
    const resolvedComplaint = complaints[index];

    const autoMsg = {
      id: Date.now(),
      to: "Flat-101",   // 🔴 Change later to real flat/user
      message: `✅ Your complaint "${resolvedComplaint.type}" has been resolved. Thank you for your patience.`,
      from: "Admin",
      date: new Date().toLocaleString(),
      read: false
    };

    let messages = JSON.parse(localStorage.getItem("adminMessages")) || [];
    messages.push(autoMsg);
    localStorage.setItem("adminMessages", JSON.stringify(messages));
  }

  loadComplaints();
}


// ================= LOAD MY MESSAGES =================
async function loadMessages() {
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/messages");
    const messages = await res.json();

    const box = document.getElementById("messageBox");
    box.innerHTML = "";

    // ✅ FILTER ONLY MY FLAT MESSAGES
    const myMessages = messages.filter(
      m => m.to === currentUser
    );

    if (myMessages.length === 0) {
      box.innerHTML = "<p>No messages yet.</p>";
      return;
    }

    myMessages.reverse().forEach(msg => {
      const div = document.createElement("div");
      div.className = "msg";
      div.innerHTML = `
        <div class="from">From: ${msg.from}</div>
        <div>${msg.message}</div>
        <div class="date">${msg.date}</div>
      `;
      box.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    alert("Server error while loading messages");
  }
}

// LOAD ON PAGE OPEN
loadMessages();

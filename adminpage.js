async function loadComplaints() {
  const res = await fetch("http://localhost:3000/api/complaints");
  const complaints = await res.json();

  const container = document.getElementById("complaintsContainer");
  container.innerHTML = "";

  complaints.forEach(c => {
    const div = document.createElement("div");

    div.innerHTML = `
      <b>Flat:</b> ${c.flat}<br>
      <b>Type:</b> ${c.type}<br>
      <b>Description:</b> ${c.description}<br>
      <b>Status:</b> ${c.status}<br>

      <button onclick="markResolved('${c._id}', '${c.flat}')">
        ✅ Mark Resolved
      </button>
      <hr>
    `;

    container.appendChild(div);
  });
}

async function markResolved(id, flat) {
  await fetch(`http://localhost:3000/api/complaints/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "Resolved" })
  });

  await fetch("http://localhost:3000/api/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: flat,
      from: "Admin",
      message: "✅ Your complaint has been resolved.",
      date: new Date().toLocaleString()
    })
  });

  loadComplaints();
}

loadComplaints();



function resolveComplaint(complaintId) {
  const message = prompt("Enter message for user:");

  fetch(`http://localhost:3000/api/complaints/resolve/${complaintId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })
  .then(res => res.json())
  .then(() => {
    alert("Complaint marked as resolved");
    loadComplaints();   // refresh admin page
  });
}


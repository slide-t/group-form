<script>
// Check session
if (sessionStorage.getItem("isAdminLoggedIn") !== "true") {
  window.location.href = "admin.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#members-table tbody");
  const members = JSON.parse(localStorage.getItem("members") || "[]");

  members.forEach(member => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${member.name}</td>
      <td>${member.phone}</td>
      <td>${member.ward}</td>
      <td>${member.role}</td>
      <td>${member.timestamp}</td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("save-access").addEventListener("click", () => {
    const chairman = document.getElementById("access-chairman").checked;
    const secretary = document.getElementById("access-secretary").checked;
    localStorage.setItem("accessControl", JSON.stringify({ chairman, secretary }));
    document.getElementById("access-status").textContent = "Access settings saved.";
  });

  const access = JSON.parse(localStorage.getItem("accessControl") || "{}");
  document.getElementById("access-chairman").checked = access.chairman || false;
  document.getElementById("access-secretary").checked = access.secretary || false;
});
</script>
<!-- Add jsPDF library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // ...existing code...

  // Add event listener to the Print PDF button
  document.querySelector(".print-btn").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const members = JSON.parse(localStorage.getItem("members") || "[]");

    doc.setFontSize(16);
    doc.text("qpqq - Member Data Preview", 14, 15);
    doc.setFontSize(12);

    let y = 25;
    doc.text("Name", 14, y);
    doc.text("Phone", 54, y);
    doc.text("Ward", 94, y);
    doc.text("Role", 134, y);
    doc.text("Timestamp", 164, y);
    y += 10;

    members.forEach(member => {
      doc.text(member.name || "", 14, y);
      doc.text(member.phone || "", 54, y);
      doc.text(member.ward || "", 94, y);
      doc.text(member.role || "", 134, y);
      doc.text(member.timestamp || "", 164, y);
      y += 10;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    // Open in a new tab for preview
    window.open(doc.output("bloburl"), "_blank");
  });
});
</script>





<script>
  function loginAdmin() {
  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value.trim();
  const errorMsg = document.getElementById("login-error");
  // Get stored credentials or use default if not set
  const validUsername = localStorage.getItem("adminUsername") || "admin";
  const validPassword = localStorage.getItem("adminPassword") || "admin123";

  if (username === validUsername && password === validPassword) {
    errorMsg.textContent = "";
    sessionStorage.setItem("isAdminLoggedIn", "true");
    window.location.href = "dashboard.html"; // redirect to admin dashboard
  } else {
    errorMsg.textContent = "Invalid username or password. Try again!";
  }
}
  
  
  
  const loginForm = document.getElementById('adminLoginForm');
  const loginStatus = document.getElementById('loginStatus');

  // Set default password if none is set yet
  if (!localStorage.getItem('adminPassword')) {
    localStorage.setItem('adminPassword', 'admin123');
  }

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    const storedPassword = localStorage.getItem('adminPassword');

    if (username === 'admin' && password === storedPassword) {
      sessionStorage.setItem("isAdminLoggedIn", "true");

      // Redirect to change-password.html if default password is still in use
      if (password === 'admin123') {
        window.location.href = "change-password.html";
      } else {
        window.location.href = "dashboard.html";
      }
    } else {
      loginStatus.textContent = "Invalid credentials!";
    }
  });
</script>


<script>
/*function loginAdmin() {
  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value.trim();
  const errorMsg = document.getElementById("login-error");

  // Replace with your actual credentials
  const validUsername = "gbedebiodun";
  const validPassword = "onlyMe123";

  if (username === validUsername && password === validPassword) {
    errorMsg.textContent = "";
    window.location.href = "dashboard.html"; // redirect to admin dashboard
  } else {
    errorMsg.textContent = "Invalid username or password. Try again!";
  }
}
  </script>

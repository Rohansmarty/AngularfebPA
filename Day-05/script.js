// Simulated user roles (Admin, Manager, CRM, etc.)
const users = {
    "admin@bank.com": { password: "password123", role: "Admin" },
    "manager@bank.com": { password: "manager123", role: "Manager" },
    "crm@bank.com": { password: "crm123", role: "Customer Relationship Manager" }
};

// Fake customer data
const customers = [
    { name: "John Doe", email: "john@example.com", risk: "High" },
    { name: "Jane Smith", email: "jane@example.com", risk: "Medium" },
    { name: "Sam Wilson", email: "sam@example.com", risk: "Low" }
];

// Handle Login
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (users[email] && users[email].password === password) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("userRole").innerText = users[email].role;

        // Show admin panel if user is Admin
        if (users[email].role === "Admin") {
            document.getElementById("adminBtn").style.display = "block";
        }

        loadCustomers();
        loadChart();
    } else {
        document.getElementById("loginError").innerText = "Invalid credentials!";
    }
}

// Logout function
function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

// Show different pages inside dashboard
function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(page).style.display = "block";
}

// Load customers into table
function loadCustomers() {
    let table = document.getElementById("customerTable");
    table.innerHTML = "";
    customers.forEach((c, index) => {
        table.innerHTML += `<tr>
            <td>${c.name}</td>
            <td>${c.email}</td>
            <td>${c.risk}</td>
            <td><button onclick="viewCustomer(${index})">View</button></td>
        </tr>`;
    });
}

// View customer details
function viewCustomer(index) {
    let customer = customers[index];
    document.getElementById("custName").innerText = customer.name;
    document.getElementById("custEmail").innerText = customer.email;
    document.getElementById("custRisk").innerText = customer.risk;
    showPage("customerProfile");
}

// Simulate retention action
function retentionAction() {
    alert("Retention plan offered to customer!");
}

// Load analytics chart
function loadChart() {
    const ctx = document.getElementById('churnChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['High Risk', 'Medium Risk', 'Low Risk'],
            datasets: [{
                label: 'Churn Risk Levels',
                data: [30, 50, 20], // Fake data
                backgroundColor: ['red', 'yellow', 'green']
            }]
        }
    });
}

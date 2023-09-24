const users = [
    { name: "Abhishek", email: "abi@gmail.com", password: "password123" },
    { name: "test", email: "test@example.com", password: "securepassword" }
];

function register(event) {
    event.preventDefault();
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (users.some(user => user.email === email)) {
        alert("User with this email already exists.");
        return;
    }

    users.push({ name, email, password });
    alert("Registration successful. You can now log in.");
    clearRegisterForm();
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        alert("Invalid email or password.");
        return;
    }

    alert(`Welcome, ${user.name}! You are now logged in.`);
    window.location.href = "http://127.0.0.1:3000/expense.html"; 
    clearLoginForm();
}

function clearRegisterForm() {
    document.getElementById("register-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";
    window.location.href="index.html"
}

function clearLoginForm() {
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
}

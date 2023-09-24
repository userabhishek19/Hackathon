const expenseList = document.getElementById("expense-list");


function addExpense(event) {
    event.preventDefault();

    const description = document.getElementById("expense-description").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (!description || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
        <span>${description}</span>
        <span>$${amount.toFixed(2)}</span>
    `;

    expenseList.appendChild(expenseItem);


    document.getElementById("expense-description").value = "";
    document.getElementById("expense-amount").value = "";
}

   
    function proceedToIncome() {
        window.location.href = "http://127.0.0.1:3000/html/income.html"; // Replace with your actual URL
    }
    

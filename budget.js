const budgetList = document.getElementById("budget-list");


function createBudget(event) {
    event.preventDefault();

    const category = document.getElementById("budget-category").value;
    const limit = parseFloat(document.getElementById("budget-limit").value);

    if (!category || isNaN(limit)) {
        alert("Please enter a valid category and budget limit.");
        return;
    }

    const budgetItem = document.createElement("li");
    budgetItem.innerHTML = `
        <span>Category: ${category}</span>
        <span>Budget Limit: $${limit.toFixed(2)}</span>
    `;

    budgetList.appendChild(budgetItem);


    document.getElementById("budget-category").value = "";
    document.getElementById("budget-limit").value = "";
}

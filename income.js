const incomeList = document.getElementById("income-list");


function addIncome(event) {
    event.preventDefault();

    const source = document.getElementById("income-source").value;
    const frequency = document.getElementById("income-frequency").value;
    const amount = parseFloat(document.getElementById("income-amount").value);

    if (!source || !frequency || isNaN(amount)) {
        alert("Please enter valid source, frequency, and amount.");
        return;
    }

    const incomeItem = document.createElement("li");
    incomeItem.innerHTML = `
        <span>Source: ${source}</span>
        <span>Frequency: ${frequency}</span>
        <span>Amount: $${amount.toFixed(2)}</span>
    `;

    incomeList.appendChild(incomeItem);


    document.getElementById("income-source").value = "";
    document.getElementById("income-frequency").value = "";
    document.getElementById("income-amount").value = "";
}

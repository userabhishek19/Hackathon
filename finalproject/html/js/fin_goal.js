const goalTableBody = document.getElementById("goal-table-body");
const goalChart = document.getElementById("goal-chart").getContext("2d");
const goals = [];
let goalChartInstance;

function addGoal(event) {
  event.preventDefault();

  const goalName = document.getElementById("goal-name").value;
  const goalAmount = parseFloat(document.getElementById("goal-amount").value);

  if (!goalName || isNaN(goalAmount)) {
    alert("Please enter a valid goal name and goal amount.");
    return;
  }

  goals.push({ name: goalName, amount: goalAmount });

  const goalRow = document.createElement("tr");
  goalRow.innerHTML = `
        <td>${goalName}</td>
        <td>₹${goalAmount.toFixed(2)}</td>
    `;

  goalTableBody.appendChild(goalRow);

  document.getElementById("goal-name").value = "";
  document.getElementById("goal-amount").value = "";

  updateChart();
}

function updateChart() {
  if (goalChartInstance) {
    goalChartInstance.destroy();
  }

  const goalNames = goals.map((goal) => goal.name);
  const goalAmounts = goals.map((goal) => goal.amount);

  goalChartInstance = new Chart(goalChart, {
    type: "bar",
    data: {
      labels: goalNames,
      datasets: [
        {
          label: "Goal Amount (₹)",
          data: goalAmounts,
          backgroundColor: "#007BFF",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

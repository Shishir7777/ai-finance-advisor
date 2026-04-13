document.getElementById("financeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values
    let income = parseFloat(document.getElementById("income").value);
    let rent = parseFloat(document.getElementById("rent").value);
    let food = parseFloat(document.getElementById("food").value);
    let transport = parseFloat(document.getElementById("transport").value);
    let entertainment = parseFloat(document.getElementById("entertainment").value);
    let other = parseFloat(document.getElementById("other").value);
    let goal = parseFloat(document.getElementById("goal").value);

    // Calculations
    let totalExpenses = rent + food + transport + entertainment + other;
    let savings = income - totalExpenses;

    let monthsToGoal = savings > 0 ? (goal / savings).toFixed(1) : "Not possible";

    // Recommendations (your "AI")
    let advice = [];

    if (savings < 0) {
        advice.push("You are spending more than you earn.");
    }
    if (entertainment > income * 0.2) {
        advice.push("Reduce entertainment spending.");
    }
    if (rent > income * 0.4) {
        advice.push("Your rent is too high.");
    }
    if (savings > 0) {
        advice.push("You are saving money each month. Good job.");
    }

    // Display results
    document.getElementById("results").innerHTML = `
        <h2>Results</h2>
        <p><strong>Total Expenses:</strong> $${totalExpenses}</p>
        <p><strong>Monthly Savings:</strong> $${savings}</p>
        <p><strong>Months to Reach Goal:</strong> ${monthsToGoal}</p>

        <h3>Recommendations:</h3>
        <ul>
            ${advice.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;
});

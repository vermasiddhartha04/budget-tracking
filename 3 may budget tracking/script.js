let balance = 0;

function addTransaction() {
    const descriptionInput = document.getElementById("description");
    const amountInput = document.getElementById("amount");
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description.trim() === "" || isNaN(amount)) {
        alert("Please enter valid description and amount.");
        return;
    }

    balance += amount;

    // Update balance
    document.getElementById("balance").textContent = balance.toFixed(2);

    // Add transaction to list
    const transactionList = document.getElementById("transaction-list");
    const li = document.createElement("li");
    li.textContent = `${description}: $${amount.toFixed(2)}`;
    transactionList.appendChild(li);

    // Clear input fields
    descriptionInput.value = "";
    amountInput.value = "";
}

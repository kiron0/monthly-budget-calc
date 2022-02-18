function getInput(idInput) {
    const inputValue = document.getElementById(idInput).value;
    return parseFloat(inputValue);
}
// calculate total expenses & balance
// get all the value by id
// calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = getInput('income-input');
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const utilityInput = getInput('utility-input');
    const othersInput = getInput('others-input');
    const total = foodInput + rentInput + othersInput + utilityInput;
    // calculate button error handling
    if (isNaN(total)) {
        alert("Input cannot be empty");
    } else if (total > incomeInput) {
        alert('You have not enough income to expense');
    }
    else if (incomeInput < 0 || foodInput < 0 || rentInput < 0 || utilityInput < 0 || othersInput < 0) {
        alert("Please input positive value");
    } else {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = total;
        const totalBalance = document.getElementById('balance');
        totalBalance.innerText = incomeInput - parseInt(totalExpenses.innerText);
    }
});
// calculate save money part
function saveMoney() {
    let balance = document.getElementById('balance');
    const incomeInput = getInput('income-input');
    const saveMoneyInput = getInput('save-money-input');
    let savesMoney = (incomeInput * saveMoneyInput) / 100;
    const savingAmount = document.getElementById('saving-amount');
    let remainingBalance = document.getElementById('remaining-balance');
    // save money part error handling
    if (isNaN(saveMoneyInput)) {
        alert("Input cannot be empty");
    }
    else if (savesMoney > parseFloat(balance.innerText)) {
        alert("You have not enough money for savings");
    }
    else if ((saveMoneyInput) < 0) {
        alert("Please input positive value");
    } else {
        savingAmount.innerText = savesMoney;
        remainingBalance.innerText = parseFloat(balance.innerText) - savesMoney;
    }
}
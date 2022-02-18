// get all the value
function getInput(idInput) {
    const inputValue = document.getElementById(idInput).value;
    return parseFloat(inputValue);
}
// calculate total expenses & balance
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = getInput('income-input');
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const utilityInput = getInput('utility-input');
    const othersInput = getInput('others-input');
    const total = foodInput + rentInput + othersInput + utilityInput;
    // calculate button error handling
    if (isNaN(total)) {
        alert("কিছু না লিখেই হিসাব করিস কেন?");
    } else if (total > incomeInput) {
        alert('আয় বুঝে ব্যয় কর');
    }
    else if (incomeInput < 0 || foodInput < 0 || rentInput < 0 || utilityInput < 0 || othersInput < 0) {
        alert("টাকার পরিমাণ কি নেগেটিভ হয়?");
    } else {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = total;
        const totalBalance = document.getElementById('balance');
        totalBalance.innerText = incomeInput - parseInt(totalExpenses.innerText);
    }
    // reset('income-input');
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
        alert("কিছু না লিখেই হিসাব করিস কেন?");
    }
    else if (savesMoney > parseFloat(balance.innerText)) {
        alert("সেভিংস করার জন্য পর্যাপ্ত পরিমাণ টাকা নেই");
    }
    else if ((saveMoneyInput) < 0) {
        alert("টাকার পরিমাণ কি নেগেটিভ হয়?");
    } else {
        savingAmount.innerText = savesMoney;
        remainingBalance.innerText = parseFloat(balance.innerText) - savesMoney;
    }
}

let btnClear = document.getElementById('reset-btn');
let inputs = document.querySelectorAll('input');
let amounts = document.querySelectorAll('.amount');
btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
    amounts.forEach(amount => amount.innerText = '00');
});

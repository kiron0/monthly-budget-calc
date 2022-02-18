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
        return Swal.fire({
            icon: "error",
            title: "কিরে...",
            html: "কিছু না লিখেই হিসাব করতে চাইছিস?😆",
          });
    } else if (total > incomeInput) {
        return Swal.fire({
            icon: "error",
            html: "আয় বুঝে ব্যয় কর",
          });
    }
    else if (incomeInput < 0) {
        return Swal.fire({
            icon: "error",
            html: "<b>আয়ের</b> পরিমাণ কি নেগেটিভ হয়?",
          });
    }
    else if (foodInput < 0) {
        return Swal.fire({
            icon: "error",
            html: "<b>খাবার খরচ</b> কি নেগেটিভ হয়?",
          });
    }
    else if (rentInput < 0 ) {
        return Swal.fire({
            icon: "error",
            html: "<b>বাড়ি ভাড়া</b> কি নেগেটিভ হয়?",
          });
    }
    else if (utilityInput < 0 ) {
        return Swal.fire({
            icon: "error",
            html: "<b>ইউটিলিটি বিলের</b> পরিমাণ কি নেগেটিভ হয়?",
          });
    }
    else if (othersInput < 0 ) {
        return Swal.fire({
            icon: "error",
            html: "<b>অন্যান্য খরচ</b> কি নেগেটিভ হয়?",
          });
    }
     else {
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = total;
        const totalBalance = document.getElementById('balance');
        totalBalance.innerText = incomeInput - parseInt(totalExpenses.innerText);
    }
    reset('income-input');
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
        return Swal.fire({
            icon: "error",
            title: "কিরে...",
            html: "হিসাব না করে আগেই সেভিংস বের করতে চাইছিস?😆",
          });
    }
    else if (savesMoney > parseFloat(balance.innerText)) {
        return Swal.fire({
            icon: "error",
            html: "সেভিংস করার জন্য পর্যাপ্ত পরিমাণ টাকা নেই",
          });
    }
    else if ((saveMoneyInput) < 0) {
        return Swal.fire({
            icon: "error",
            html: "<b>পার্সেন্টেসের</b> পরিমাণ কি নেগেটিভ হয়?",
          });
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

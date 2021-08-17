document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = Number(document.getElementById('deposit-input').value);
    let totalDeposit = Number(document.getElementById('total-deposit').innerText);
    totalDeposit += depositInput;
    document.getElementById('total-deposit').innerText = totalDeposit;
    // reset input
    document.getElementById('deposit-input').value = '';
    // updating total balance
    let totalBalance = Number(document.getElementById('total-balance').innerText);
    totalBalance += depositInput;
    document.getElementById('total-balance').innerText = totalBalance;
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = Number(document.getElementById('withdraw-input').value);
    let totalWithdraw = Number(document.getElementById('total-withdraw').innerText);
    totalWithdraw += withdrawInput;
    document.getElementById('total-withdraw').innerText = totalWithdraw;
    // reset input
    document.getElementById('withdraw-input').value = '';
    // updating total balance 
    let totalBalance = Number(document.getElementById('total-balance').innerText);
    totalBalance -= withdrawInput;
    document.getElementById('total-balance').innerText = totalBalance;
})
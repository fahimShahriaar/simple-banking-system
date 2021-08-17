function getInputValue(inputId) {
    const inputField = Number(document.getElementById(inputId).value);
    // reset input
    document.getElementById(inputId).value = '';
    return inputField;
}

function updateTotalField(totalFieldId, inputValue) {
    let totalFieldAmount = Number(document.getElementById(totalFieldId).innerText);
    totalFieldAmount += inputValue;
    document.getElementById(totalFieldId).innerText = totalFieldAmount;
}

function updateTotalBalance(field, fieldInput) {
    let totalBalance = Number(document.getElementById('total-balance').innerText);
    if (field === 'deposit') {
        totalBalance += fieldInput;
    }
    else if (field === 'withdraw' && totalBalance > 0) {
        totalBalance -= fieldInput;
    }
    document.getElementById('total-balance').innerText = totalBalance;
}


document.getElementById('deposit-btn').addEventListener('click', function () {
    // get deposit input
    const depositInput = getInputValue('deposit-input');
    if (depositInput > 0) {
        // update total deposit
        updateTotalField('total-deposit', depositInput);
        // update total balance
        updateTotalBalance('deposit', depositInput);
    }

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get withdraw input
    const withdrawInput = getInputValue('withdraw-input');
    if (withdrawInput > 0) {
        const totalBalance = Number(document.getElementById('total-balance').innerText);
        if (totalBalance > 0) {
            // update total withdraw
            updateTotalField('total-withdraw', withdrawInput);
        }

        // update total balance
        updateTotalBalance('withdraw', withdrawInput);
    }
})
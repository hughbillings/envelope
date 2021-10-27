// Event Listeners

window.onload = function () {

    //This triggers the deposit function when the deposit button is clicked.
    document.getElementById('deposit').addEventListener('click', deposit);
    document.getElementById('').addEventListener('click', createEnvelope);

}

const clearAmount = () =>
{
    document.getElementById('amount').value = " ";

}

const deposit = () => 
{
    let accounts = document.getElementsByName('deposit');
    let amount = document.getElementById('amount').value;
    let bankAbal = document.getElementById('bankABalance');
    let bankBbal = document.getElementById('bankBBalance');
    let total;

    for(i=0; i < accounts.length; i++)
    {
        if(accounts[i].checked)
        {
            if(accounts[i].value == "BankA")
            {
                total = Number(bankAbal.innerHTML) + Number(amount);
                bankAbal.innerHTML = total;
                accounts[i].checked = false;
                clearAmount();
            } else 
            {
                total = Number(bankBbal.innerHTML) + Number(amount);
                bankBbal.innerHTML = total;
                accounts[i].checked = false;
                clearAmount();
            }
        }
    }

    
}

const createEnvelope = () => 
{
    let bankAccounts = document.getElementsByName('withdrawal');
    let amount = document.getElementById('envelope-amount');
    let name = document.getElementById('')
}

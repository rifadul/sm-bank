// login button even handler

const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click",function(){
    // login-area hide js code
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    // transaction-area show js code
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
 })


//  deposite button event handle
const addDepositeBtn = document.getElementById("depositeBtn");
addDepositeBtn.addEventListener("click",function(){
    //deposite input value read
    const depositeNumber =  getInputNumber("deposite-amount");

    updateSpantext("currentDeposite",depositeNumber);  // deposite span value update

    updateSpantext("currentBalance",depositeNumber);   // balance span value uptade
    // clear filde
    document.getElementById("deposite-amount").value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const converAmount = parseFloat(amount);
    return converAmount;
}

function updateSpantext (id,addBalace){
    const currentAmount = document.getElementById(id).innerText; 
    const newCurrentAmount = parseFloat(currentAmount);
    // update balance
    const totalAmount = addBalace + newCurrentAmount;
    document.getElementById(id).innerText = totalAmount;
}


// withdraw button even handle
const addWithdrawBtn = document.getElementById("withdrawBtn");
addWithdrawBtn.addEventListener("click",function(){
    //withdraw input value read
        const withdrawNumber =  getInputNumber("withdraw-amount") ;

    updateSpantext("currentWithdraw",withdrawNumber);   //  withdraw span value update

    updateSpantext("currentBalance",-1*withdrawNumber);    // update balance
    // clear filde 
    document.getElementById("withdraw-amount").value = "";
})
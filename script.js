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
    const depositeAmount = document.getElementById("deposite-amount").value;
    const depositeNumber = parseFloat(depositeAmount);
    

    //deposite text value read
    const currentDeposite = document.getElementById("currentDeposite").innerText; 
    const CurrentDepositeNumber = parseFloat(currentDeposite);


    // update deposite balance
    const totalDeposite = depositeNumber + CurrentDepositeNumber;

    document.getElementById("currentDeposite").innerText = totalDeposite;
    // clear filde
    document.getElementById("deposite-amount").value = "";
    

// balance update 
    const currentBalance = document.getElementById("currentBalance").innerText;
    const CurrentBalanceNumber = parseFloat(currentBalance);


    const totalBanlace = CurrentBalanceNumber + depositeNumber;
    document.getElementById("currentBalance").innerText = totalBanlace;
})


// withdraw button even handle
const addWithdrawBtn = document.getElementById("withdrawBtn");
addWithdrawBtn.addEventListener("click",function(){
    //withdraw input value read
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber =parseFloat(withdrawAmount);

    // Balance text value read
    const currentBalanceWdrw = document.getElementById("currentBalance").innerText;
    const CurrentBalanceWdrwNumber = parseFloat(currentBalanceWdrw);

    // withdraw text value read
    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const CurrentWithdrawNumber = parseFloat(currentWithdraw);

    // update balance
    const balanceWithdraw = CurrentBalanceWdrwNumber - withdrawNumber;
   
    document.getElementById("currentBalance").innerText = balanceWithdraw;

    // update withdraw balance
    const totalWithdraw = withdrawNumber + CurrentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText = totalWithdraw;

    // clear filde 
    document.getElementById("withdraw-amount").value = "";

    // siam

})
const loginBtn = document.getElementById("button-1");
loginBtn.addEventListener("click", function(){
    var formArea = document.getElementById("form-aria");
    formArea.style.display="none";
    var after = document.getElementById('after');
    after.style.display = "block";
}) 









const depositBtn = document.getElementById("deposit-add");
depositBtn.addEventListener("click" , function(){
    var depositInput = document.getElementById("deposit-string").value;
    var depositInputNum = parseFloat(depositInput);
    
    var depositBefore = document.getElementById("deposit-before").innerText;
    var depositBeforeNum =  parseFloat(depositBefore);
    document.getElementById("deposit-before").innerText = depositBeforeNum + depositInputNum;

    var balanceBefore = document.getElementById("balance-before").innerText;
    var balanceBeforeNum =  parseFloat(balanceBefore);
    document.getElementById("balance-before").innerText = balanceBeforeNum + depositInputNum;

    document.getElementById("deposit-string").value="";
})









const withdrawBtn = document.getElementById("withdraw-add");
withdrawBtn.addEventListener("click" , function(){
    var withdrawInput = document.getElementById("withdraw-string").value;
    var withdrawInputNum = parseFloat(withdrawInput);
    
    var withdrawBefore = document.getElementById("withdraw-before").innerText;
    var withdrawBeforeNum =  parseFloat(withdrawBefore);
    document.getElementById("withdraw-before").innerText = withdrawBeforeNum + withdrawInputNum;

    var balanceBefore = document.getElementById("balance-before").innerText;
    var balanceBeforeNum =  parseFloat(balanceBefore);
    document.getElementById("balance-before").innerText = balanceBeforeNum - withdrawInputNum;

    document.getElementById("withdraw-string").value="";
})
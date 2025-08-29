

document.getElementById('add-money-btn').addEventListener("click" ,function(e){
    e.preventDefault();
   const validpin = 1234;
   const bank = document.getElementById("bank").value;
   const accountNumber = document.getElementById("account-number").value;
   const amount = parseInt(document.getElementById("add-amount").value);
   const pin = document.getElementById("add-pin").value;
  const availableBalance = parseInt(document.getElementById("available-balance").innerText);

 if(accountNumber.length !==  11){
   alert("please provide valid account number");
   return;
 }
  
 if(validpin !== pin){
   alert("please provide valid pin number");
   return;
 }
  const newBalance = amount + availableBalance 
  document.getElementById("available-balance").innerText = newBalance;
  

} )  
// Cashout 


document.getElementById("withdraw-btn").addEventListener("click" , function(e){
  e.preventDefault()
  const pinNum = 1234;
  const amount =parseInt (document.getElementById("withdraw-amount").value);
  const availableBalance = parseInt(document.getElementById("available-balance").innerText);
  const agentNumber = document.getElementById("agent-number").value;
  const pin = document.getElementById("pinNumber").value;

  if(agentNumber.length !== 11){
    alert("please provide valid agent number");
    return;
  }

  if(pinNum !== pin){
     alert("please provide valid pin number");
   return;
  }

  const newBalance =  availableBalance -amount 
  document.getElementById("available-balance").innerText = newBalance;

})

//toggling feature

document.getElementById("cashout-btn").addEventListener("click" , function(){
   document.getElementById("add-money-parent").style.display= "none"
   document.getElementById("cash-out-parent").style.display= "block"

})

document.getElementById("add-button").addEventListener("click" , function(){
  document.getElementById("cash-out-parent").style.display= "none"
   document.getElementById("add-money-parent").style.display= "block"
   

})
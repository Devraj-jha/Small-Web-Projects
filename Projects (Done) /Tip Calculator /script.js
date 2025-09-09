const btn = document.getElementById('calculate')


function CalculateTip() {
  const billValue = document.getElementById('billAmt').value;
  const tipValue = document.getElementById('tipPer').value;

  const bill = parseFloat(billValue);
  const tip = parseFloat(tipValue);

  if (
    billValue === "" ||
    tipValue === "" ||
    isNaN(bill) ||
    isNaN(tip) ||
    bill <= 0 ||
    tip < 0
  ) {
    alert("Please enter something valid for both bill and tip percentage");
    return;
  }

 let tipAmt =  (tip/100) * bill;
 let totalAmt = tipAmt + bill;

 tipAmt = tipAmt.toFixed(2);
 totalAmt = totalAmt.toFixed(2);

 document.querySelector('.tipAmount').textContent = tipAmt;
 document.querySelector('.totalAmount').textContent = totalAmt;

}
function reset(){
    

 document.querySelector('.tipAmount').textContent = "";
 document.querySelector('.totalAmount').textContent = "";

 document.getElementById('billAmt').value = ""; 
 document.getElementById('tipPer').value = "";


 document.getElementById('billAmt').focus(); 

}
btn.addEventListener('click', CalculateTip)
document.getElementById('reset').addEventListener('click', reset)

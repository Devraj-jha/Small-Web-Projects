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

 document.querySelector('.tipAmount').textContent = tipAmt;
 document.querySelector('.totalAmount').textContent = totalAmt;

}
btn.addEventListener('click', CalculateTip)
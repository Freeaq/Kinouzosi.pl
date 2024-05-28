function calculatePrice() {

  const basePrices = {
    normal: 20, 
    student: 15, 
    child: 10 
  };

  const screeningCharges = {
    '2d': 0,
    '3d': 5 
  };


  const discountRates = {
    'TO': 0.1, 
    'JEST': 0.2,
    'NAJLEPSZE': 0.3,
    'KINO': 1    
  };

  const ticketType = document.getElementById('ticketType').value;
  const basePrice = basePrices[ticketType];


  const ticketQuantity = parseInt(document.getElementById('ticketQuantity').value, 10);


  const screeningType = document.getElementById('screeningType').value;
  const additionalCharge = screeningCharges[screeningType];

  let subtotal = (basePrice + additionalCharge) * ticketQuantity;


  const discountCode = document.getElementById('discountCode').value.toUpperCase();
  const discount = discountRates[discountCode];
  if (discount) {
    subtotal *= (1 - discount);
  }

  document.getElementById('price').textContent = subtotal.toFixed(2);
  document.getElementById('calculatedPrice').style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
  const calculateButton = document.querySelector('button[onclick="calculatePrice()"]');
  calculateButton.addEventListener('click', calculatePrice);
});
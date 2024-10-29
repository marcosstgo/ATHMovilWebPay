document.getElementById('pay-button').addEventListener('click', function () {
  const amount = document.getElementById('amount').value;

  if (amount <= 0) {
      alert('Por favor, ingrese una cantidad válida.');
      return;
  }

  const ATHM_Checkout = {
      publicToken: '6a96089f63cb67eb90cb27f468ca33cb2a832c78',
      env: 'production',
      total: parseFloat(amount),
      subtotal: parseFloat(amount),
      tax: 0,
      metadata1: 'Pago personalizado',
      items: [{
          name: 'Pago',
          description: 'Transacción con ATH Móvil',
          quantity: '1',
          price: amount
      }]
  };

  console.log('Procesando pago con ATH Móvil:', ATHM_Checkout);
  // Aquí puedes añadir la lógica para llamar a la API de ATH Móvil si es necesario.
});

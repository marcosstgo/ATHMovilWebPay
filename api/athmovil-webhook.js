const express = require('express');
const app = express();
app.use(express.json()); // Para manejar JSON en las solicitudes

// Endpoint del webhook para recibir eventos de ATH Móvil
app.post('/api/athmovil-webhook', (req, res) => {
  const { status, referenceNumber, total, items, phoneNumber, date } = req.body;

  console.log('Evento recibido:', req.body);

  // Verificar el estado del pago
  if (status === 'completed') {
    console.log(`✅ Pago completado con referencia: ${referenceNumber}`);
    console.log(`Monto total: $${total}`);
    if (items && items.length > 0) {
      console.log(`Artículo: ${items[0].name || 'N/A'} - Cantidad: ${items[0].quantity}`);
    }
  } else if (status === 'cancelled') {
    console.log(`⚠️ Pago cancelado. Referencia: ${referenceNumber}`);
  } else if (status === 'expired') {
    console.log(`⏳ Pago expirado. Referencia: ${referenceNumber}`);
  } else {
    console.log(`⚠️ Estado desconocido: ${status}`);
  }

  // Registrar cualquier dato adicional relevante
  console.log(`Fecha de la transacción: ${date}`);
  console.log(`Número de teléfono asociado: ${phoneNumber}`);

  // Responder a ATH Móvil con un código 200 para confirmar la recepción del evento
  res.status(200).send('Evento procesado correctamente');
});

// Configurar el servidor para escuchar en el puerto proporcionado por Vercel o el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

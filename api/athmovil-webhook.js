app.post('/api/athmovil-webhook', (req, res) => {
    const { referenceNumber, status, total, items } = req.body;
  
    console.log('Evento recibido:', req.body);
  
    if (status === 'completed') {
      console.log(`Pago completado con referencia: ${referenceNumber} por un total de $${total}`);
    } else {
      console.log(`El pago no se completó. Estado: ${status}`);
    }
  
    if (items && items.length > 0) {
      console.log(`Artículo recibido: ${items[0].name || "Sin nombre"} - Cantidad: ${items[0].quantity}`);
    } else {
      console.log('Advertencia: No se recibieron artículos en el evento.');
    }
  
    res.status(200).send('Evento procesado correctamente');
  });
  
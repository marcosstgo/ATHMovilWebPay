export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Método no permitido' });
    }
  
    try {
      const evento = req.body;
      console.log('Evento recibido:', evento);
  
      const {
        referenceNumber,
        status,
        items,
        tax,
        subtotal,
        total,
        fee,
        netAmount,
        transactionType,
        date,
        email,
        phoneNumber,
        name,
        metadata1,
        metadata2,
        message,
      } = evento;
  
      console.log(`Referencia: ${referenceNumber}`);
      console.log(`Estado: ${status}`);
      console.log(`Total: ${total}`);
      console.log(`Subtotal: ${subtotal}`);
      console.log(`Impuesto: ${tax}`);
      console.log(`Comisión: ${fee}`);
      console.log(`Monto neto: ${netAmount}`);
      console.log(`Transacción: ${transactionType}`);
      console.log(`Fecha: ${date}`);
      console.log(`Cliente: ${name} (${email}, ${phoneNumber})`);
      console.log(`Mensaje: ${message}`);
      console.log(`Metadata1: ${metadata1}, Metadata2: ${metadata2}`);
  
      // Procesar los items recibidos
      if (items && items.length > 0) {
        items.forEach((item, index) => {
          console.log(`Item ${index + 1}:`, item);
        });
      }
  
      // Verificar el estado del pago
      if (status === 'completed') {
        console.log(`Pago completado con referencia: ${referenceNumber}`);
      } else if (status === 'cancelled') {
        console.log('El pago fue cancelado por el usuario.');
      } else if (status === 'expired') {
        console.log('El pago ha expirado.');
      } else {
        console.log('Estado del pago desconocido:', status);
      }
  
      res.status(200).json({ message: 'Evento procesado correctamente' });
    } catch (error) {
      console.error('Error procesando el evento:', error);
      res.status(500).json({ message: 'Error procesando el evento' });
    }
  }
  
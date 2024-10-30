export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const eventData = req.body;
  
        console.log('Evento recibido:', eventData);
  
        // Verificar el tipo de transacción y estado
        const { status, transactionType, referenceNumber, email, total, items } = eventData;
  
        switch (status) {
          case 'completed':
            console.log(`✅ Pago completado. Ref: ${referenceNumber}, Total: ${total}, Email: ${email}`);
            break;
          case 'cancelled':
            console.log(`❌ Pago cancelado. Ref: ${referenceNumber}`);
            break;
          case 'expired':
            console.log(`⏳ Pago expirado. Ref: ${referenceNumber}`);
            break;
          default:
            console.log(`⚠️ Evento no reconocido. Estado: ${status}`);
        }
  
        // Capturar detalles adicionales del evento
        console.log(`Tipo de Transacción: ${transactionType}`);
        if (items && items.length) {
          items.forEach((item, index) => {
            console.log(`Item ${index + 1}: ${JSON.stringify(item)}`);
          });
        }
  
        // Confirmar que el evento fue procesado exitosamente
        res.status(200).json({ message: 'Evento procesado correctamente' });
      } catch (error) {
        console.error('Error al procesar el evento:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  
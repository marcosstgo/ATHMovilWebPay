export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const event = req.body;
  
        console.log('Evento recibido:', event);
  
        // Lógica para manejar cada tipo de evento
        if (event.eventName === 'transaction_completed') {
          console.log('Pago completado con éxito:', event);
          // Aquí puedes almacenar o procesar la transacción
        } else if (event.eventName === 'transaction_expired') {
          console.log('El pago ha expirado');
        } else if (event.eventName === 'transaction_canceled') {
          console.log('El pago ha sido cancelado');
        }
  
        res.status(200).json({ message: 'Evento recibido correctamente' });
      } catch (error) {
        console.error('Error procesando el evento:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} no permitido`);
    }
  }
  
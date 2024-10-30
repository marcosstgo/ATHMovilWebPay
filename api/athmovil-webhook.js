// api/athmovil-webhook.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const paymentData = req.body;
      console.log('Webhook recibido:', paymentData);
  
      if (paymentData.status === 'completed') {
        // Procesa el pago completado
        console.log('Pago completado:', paymentData);
      } else if (paymentData.status === 'cancel') {
        // Procesa cancelación del pago
        console.log('Pago cancelado:', paymentData);
      } else if (paymentData.status === 'expired') {
        // Procesa expiración del pago
        console.log('Pago expirado:', paymentData);
      }
      res.status(200).end(); // Respuesta OK
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  
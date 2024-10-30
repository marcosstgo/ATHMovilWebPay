export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body;
        console.log('Datos recibidos del webhook:', data);
  
        if (data.status === 'completed') {
          console.log('Pago completado:', data);
          res.status(200).json({ message: 'Pago recibido correctamente' });
        } else {
          console.log('Pago fallido o cancelado:', data);
          res.status(400).json({ message: 'Error en el pago' });
        }
      } catch (error) {
        console.error('Error al procesar el webhook:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
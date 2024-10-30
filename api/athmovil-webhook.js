export default async function handler(req, res) {
    try {
      if (req.method === 'POST') {
        const { email, referenceNumber, phoneNumber, status, items, total, metadata1 } = req.body;
  
        // Procesa la información recibida y maneja los eventos de acuerdo al estado del pago
        console.log("Evento recibido:", req.body);
  
        // Ejemplo: solo registra la información en logs por ahora
        console.log(`Pago de ${total} recibido de ${email} con referencia: ${referenceNumber}`);
  
        // Envía una respuesta indicando que el webhook fue procesado correctamente
        res.status(200).json({ message: "Webhook recibido y procesado correctamente" });
      } else {
        res.status(405).json({ message: "Método no permitido" });
      }
    } catch (error) {
      console.error("Error procesando el webhook:", error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  }
  
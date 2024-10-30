export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        console.log('Evento recibido:', data);

        if (data.eventName === 'payment.received') {
            console.log(`Pago recibido: ${data.payment.paymentId}`);
        } else if (data.eventName === 'payment.expired') {
            console.log('El pago expiró.');
        } else if (data.eventName === 'payment.canceled') {
            console.log('El pago fue cancelado.');
        }

        res.status(200).json({ message: 'Evento procesado correctamente' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}

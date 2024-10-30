export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log('Evento recibido:', data);

        if (data.eventName === 'payment_completed') {
            console.log('Pago completado:', data);
        } else if (data.eventName === 'payment_canceled') {
            console.log('Pago cancelado:', data);
        } else if (data.eventName === 'payment_expired') {
            console.log('Pago expirado:', data);
        }

        res.status(200).send('Evento recibido');
    } else {
        res.status(405).send('Método no permitido');
    }
}

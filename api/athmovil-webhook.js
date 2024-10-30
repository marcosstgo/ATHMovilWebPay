export default async function handler(req, res) {
    if (req.method === 'POST') {
        const event = req.body;
        console.log('Evento recibido:', event);

        switch (event.eventName) {
            case 'PAYMENT_COMPLETED':
                console.log('Pago recibido:', event.data);
                res.status(200).json({ message: 'Pago confirmado' });
                break;
            case 'PAYMENT_EXPIRED':
                console.log('Pago expirado');
                res.status(200).json({ message: 'Pago expirado' });
                break;
            case 'PAYMENT_CANCELED':
                console.log('Pago cancelado');
                res.status(200).json({ message: 'Pago cancelado' });
                break;
            default:
                res.status(400).json({ error: 'Evento no manejado' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Método no permitido');
    }
}

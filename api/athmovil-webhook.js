export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('Evento recibido:', req.body);

        // Maneja eventos específicos del webhook aquí
        switch (req.body.event) {
            case 'payment_received':
                console.log('Pago recibido');
                break;
            case 'payment_expired':
                console.log('Pago expirado');
                break;
            case 'payment_canceled':
                console.log('Pago cancelado');
                break;
            default:
                console.log('Evento desconocido');
        }

        res.status(200).json({ status: 'ok' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}

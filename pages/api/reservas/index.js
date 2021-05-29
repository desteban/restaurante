import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	if (req.method == 'POST') {
		respuesta.mensaje = 'Que hace';
	}

	res.status(respuesta.code).json(respuesta);
}

async function crearReserva(reserva = {}) {}

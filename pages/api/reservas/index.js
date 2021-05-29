import { db } from '../../../services/database';
import { buscarPersona } from '../personas/[email]';
import { crearPersona } from '../personas/index';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	const { json } = req.boy;

	if (req.method == 'POST') {
		let data;
		try {
			data = JSON.parse(json);
		} catch (error) {
			data = json;
		}

		let { reserva, persona } = data;

		let personadb = await buscarPersona(persona.email);

		if (!personadb.persona.length) {
			crearPersona(persona);
		}

		respuesta.mensaje = 'Que hace';
	}

	res.status(respuesta.code).json(respuesta);
}

async function crearReserva(
	reserva = { id_reserva, email: '', id_mesa, fecha, costo, fecha_pago }
) {
	try {
		let respuesta = await db.query(
			'INSERT INTO reservas (email, id_mesa, fecha) VALUES (?, ?, ?)',
			[reserva.email, reserva.id_mesa, reserva.fecha]
		);

		await db.end();

		return { code: 201, mensaje: 'Reserva agregada', respuesta };
	} catch (error) {
		delete error.sql;

		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	let { email } = req.query;

	if (req.method == 'GET') {
		respuesta = await buscarReserva(email);
	}

	res.status(respuesta.code).json(respuesta);
}

async function buscarReserva(email) {
	try {
		let reservas = await db.query(
			'SELECT * FROM reservas WHERE reservas.email = ? AND reservas.fecha_pago IS NULL',
			email
		);

		await db.end();

		return { code: 200, mensaje: 'Listado de reservas', reservas };
	} catch (error) {
		delete error.sql;

		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

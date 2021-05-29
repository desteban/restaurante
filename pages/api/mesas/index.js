import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo bien' };

	if (req.method == 'GET') {
		respuesta = await buscarMesas();
	}

	res.status(respuesta.code).json(respuesta);
}

async function buscarMesas() {
	try {
		let mesas = await db.query('SELECT * FROM mesas');

		await db.end();

		return { code: 200, mensaje: 'Lista de mesas', mesas };
	} catch (error) {
		delete error.sql;

		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

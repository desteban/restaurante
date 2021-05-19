import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: '' };

	if (req.method == 'GET') {
		respuesta = await buscar_platos();
	}

	res.status(respuesta.code).json(respuesta);
}

async function buscar_platos() {
	try {
		let platos = await db.query('SELECT * FROM platos');

		db.end();

		return { code: 200, mensaje: 'Listado de platos', platos };
	} catch (error) {
		delete error.sql;
		return { code: 500, mensaje: 'Algo salio mal, intente mas tarde' };
	}
}

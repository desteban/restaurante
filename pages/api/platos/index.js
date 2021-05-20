import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: '' };

	if (req.method == 'GET') {
		respuesta = await buscar_platos();
	}

	if (req.method == 'POST') {
		const { json } = req.body;

		if (json) {
			const plato = JSON.parse(json);

			respuesta = await crear_Palto(plato);
		}

		if (!json) {
			respuesta = { code: 400, mensaje: 'No se detecta un plato para agregar al menus' };
		}
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

async function crear_Palto(plato) {
	try {
		if (plato) {
			let respuesta = await db.query(
				'INSERT INTO platos (nom_plato, src, costo, descripcion) VALUES (?,?,?,?)',
				[plato.nom_plato, plato.src, plato.costo, plato.descripcion]
			);

			return { code: 200, mensaje: 'Palto agregado al menu', respuesta };
		}

		if (!plato) {
			return { code: 400, mensaje: 'No se detecto un plato para crear' };
		}
	} catch (error) {
		delete error.sql;
		delete error.index;

		if (error.errno == 1048 || error.code == 'ER_BAD_NULL_ERROR') {
			return {
				code: 400,
				mensaje: 'Por favor varifique que todos los campos estan llenos',
				plato
			};
		}

		if (error.errno == 1062 || error.code == 'ER_DUP_ENTRY') {
			return { code: 400, mensaje: 'Este plato ya se encuentra en el menu' };
		}

		return { code: 500, mensaje: 'Algo salio mal', error };
	}
}

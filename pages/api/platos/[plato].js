import { db } from '../../../services/database';

export default async function (req, res) {
	let { plato } = req.query;
	let respuesta = { code: 200, mensaje: 'Todo salio bien' };

	if (req.method == 'DELETE') {
		respuesta = await eliminar_Plato(plato);
	}

	if (req.method == 'GET') {
		respuesta = await buscarPlato(plato);
	}

	if (req.method == 'PUT') {
		let { json } = req.body;
		let plato_nuevo = JSON.parse(json);

		if (plato_nuevo) {
			respuesta = await editarPlato(plato, plato_nuevo);
		}
	}

	res.status(respuesta.code).json(respuesta);
}

async function eliminar_Plato(plato) {
	try {
		// let resultado = db.query('DELETE FROM platos WHERE platos.nom_plato = ?', plato);
		let resultado = db.query(
			'UPDATE platos SET platos.visible = false WHERE platos.nom_plato = ? ',
			plato
		);

		return { code: 200, mensaje: 'El plato ya no es visible en el menu' };
	} catch (error) {
		delete error.sql;
		delete error.index;
		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

export async function buscarPlato(plato) {
	try {
		let platodb = await db.query('SELECT * FROM platos WHERE platos.nom_plato = ?', plato);

		return { code: 200, mensaje: 'Se ha encontrado el plato', platodb };
	} catch (error) {
		delete error.sql;
		delete error.index;

		return { code: 500, mensaje: 'Algo salio mal', error };
	}
}

async function editarPlato(plato, plato_nuevo) {
	try {
		let respuesta = await db.query(
			`UPDATE platos 
			SET platos.nom_plato = ?,
			platos.src = ?,
			platos.costo = ?,
			platos.descripcion = ?,
			platos.visible = ?
			WHERE platos.nom_plato = ?`,
			[
				plato_nuevo.nom_plato,
				plato_nuevo.src,
				plato_nuevo.costo,
				plato_nuevo.descripcion,
				plato_nuevo.visible,
				plato
			]
		);

		return { code: 200, mensaje: 'Plato editado', respuesta };
	} catch (error) {
		delete error.sql;
		delete error.index;

		return { code: 500, mensaje: 'Algo salio mal', error };
	}
}

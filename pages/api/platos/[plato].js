import { db } from '../../../services/database';

export default async function (req, res) {
	let { plato } = req.query;
	let respuesta = { code: 200, mensaje: 'Todo salio bien' };

	if (req.method == 'DELETE') {
		respuesta = await eliminar_Plato(plato);
	}

	res.status(respuesta.code).json(respuesta);
}

async function eliminar_Plato(plato) {
	try {
		let resultado = db.query('DELETE FROM platos WHERE platos.nom_plato = ?', plato);

		return { code: 200, mensaje: 'Plato retirado del menu' };
	} catch (error) {
		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

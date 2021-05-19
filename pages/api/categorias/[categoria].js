import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	let { categoria } = req.query;

	respuesta = await buscar_categoria(categoria);

	res.status(respuesta.code).json(respuesta);
}

async function buscar_categoria(nom_categoria) {
	try {
		let categoria = await db.query(
			'SELECT * FROM categorias WHERE categorias.nom_categoria = ?',
			nom_categoria
		);

		db.end();

		let tam = [];

		if (categoria.length != 0) {
			return { code: 200, mensaje: 'Categoria encontrada', categoria: categoria[0] };
		}

		if (categoria.length == 0) {
			return { code: 404, mensaje: 'No encontramos la categoria' };
		}
	} catch (error) {
		delete error.sql;
		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

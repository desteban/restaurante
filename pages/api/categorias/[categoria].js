import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	let { categoria } = req.query;

	if (req.method == 'GET') {
		respuesta = await buscar_categoria(categoria);
	}

	if (req.method == 'DELETE') {
		respuesta = await eliminar_categoria(categoria);
	}

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

async function eliminar_categoria(nom_categoria) {
	try {
		let resultado = await db.query(
			'DELETE FROM categorias WHERE categorias.nom_categoria = ?',
			nom_categoria
		);
		db.end();

		return { code: 200, mensaje: 'Categoria eliminada' };
	} catch (error) {
		delete error.sql;
		return { code: 500, mensaje: 'Algo salio mal' };
	}
}

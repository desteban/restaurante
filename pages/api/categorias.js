import { db } from '../../services/database';

export default async function (req, res) {
	let resultado = { code: 500, mensaje: 'Algo salio mal' };

	if (req.method == 'GET') {
		resultado = await buscar_categorias();
	}

	if (req.method == 'POST') {
		let { json } = req.body;

		let categoria = JSON.parse(json);

		resultado = await crear_categoria(categoria);
	}

	res.status(resultado.code).json(resultado);
}

async function buscar_categorias() {
	try {
		let categorias = await db.query('SELECT * FROM categorias');

		await db.end();

		return { code: 200, categorias };
	} catch (error) {
		return { code: 404, mensaje: 'Algo salio mal', categorias: [] };
	}
}

async function crear_categoria(categoria) {
	if (categoria) {
		if (categoria.nom_categoria == '') {
			return { code: 400, mensaje: 'No se detecta un nombre de categoria' };
		}

		if (categoria.nom_categoria != '') {
			try {
				let resultado = await db.query(
					'INSERT INTO categorias (nom_categoria) values (?)',
					categoria.nom_categoria
				);

				await db.end();

				return { code: 201, mensaje: 'Se agrego la categoria', resultado };
			} catch (error) {
				delete error.sql;
				delete error.index;

				if (error.code == 'ER_DUP_ENTRY' || error.errno == 1062) {
					return { code: 400, mensaje: 'Esta categoria ya fue registrada', error };
				}
				return {
					code: 500,
					mensaje: 'Algo salio mal',
					error,
					tamanio: categoria.nom_categoria.lenght
				};
			}
		}
	}

	if (!categoria) {
		return { code: 400, mensaje: 'No se recibieron datos' };
	}
}

import { db } from '../../services/database';

export default async function (req, res) {
	let resultado = await buscar_categorias();

	res.status(resultado.code).json(resultado);
}

async function buscar_categorias() {
	try {
		let categorias = await db.query('SELECT * FROM categorias');

		await db.end;

		return { code: 200, categorias };
	} catch (error) {
		return { code: 400, mensaje: 'Algo salio mal', categorias: [] };
	}
}

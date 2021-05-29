import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };
	let { email } = req.query;

	if (req.method == 'GET') {
		respuesta.email = email;
		respuesta = await buscarPersona(email);
	}

	res.status(respuesta.code).json(respuesta);
}

export async function buscarPersona(email) {
	try {
		let persona = await db.query('SELECT * FROM personas WHERE personas.email = ?', [email]);

		await db.end();

		return { code: 200, mensaje: 'Persona encontrada', persona };
	} catch (error) {
		delete error.sql;

		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

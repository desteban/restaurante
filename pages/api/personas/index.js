import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	if (req.method == 'POST') {
		const { json } = req.body;
		let persona;

		try {
			persona = JSON.parse(json);
		} catch (error) {
			persona = json;
		}

		respuesta = await crearPersona(persona);
	}

	res.status(respuesta.code).json(respuesta);
}

export async function crearPersona(persona = { email: '', nombre: '', apellido: '' }) {
	try {
		let respuesta = await db.query(
			`INSERT INTO personas (email, nombre, apellido) VALUES (?, ?, ?)`,
			[persona.email, persona.nombre, persona.apellido]
		);

		await db.end();

		return { code: 201, mensaje: 'Persona registrada exitosamente', respuesta };
	} catch (error) {
		delete error.sql;

		if (error.code == 'ER_DUP_ENTRY' || error.errno == 1062) {
			return { code: 400, mensaje: 'Este email ya fue registrado' };
		}

		return { code: 500, mensaje: 'Algo salio mal', error };
	}
}

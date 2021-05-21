import { db } from '../../../services/database';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	if (req.method == 'POST') {
		let { json } = req.body;

		if (json) {
			let documento = JSON.parse(json);
			respuesta = await agregarDocumento(documento);
		}
	}

	if (req.method == 'GET') {
		respuesta = await buscarDocumentos();
	}

	res.status(respuesta.code).json(respuesta);
}

async function agregarDocumento(documento) {
	try {
		let respuesta = await db.query(
			'INSERT INTO documentos (documento) VALUES (?)',
			documento.documento
		);

		await db.end();

		return { code: 201, mensaje: 'Docuemto agregado con exito', respuesta };
	} catch (error) {
		delete error.sql;

		if (error.code == 'ER_DUP_ENTRY' || error.errno == 1062) {
			return { code: 400, mensaje: 'Este documento ya fue agregado' };
		}

		return { code: 500, mensaje: 'Algo salio mal', error };
	}
}

async function buscarDocumentos() {
	try {
		let resultado = await db.query('SELECT * FROM documentos');

		return { code: 200, mensaje: 'lista de documentos', documentos: resultado };
	} catch (error) {
		delete error.sql;

		return { code: 400, mensaje: 'ALgo salio mal', error };
	}
}

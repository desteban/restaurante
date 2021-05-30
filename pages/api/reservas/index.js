import { db } from '../../../services/database';
import { buscarPersona } from '../personas/[email]';
import { crearPersona } from '../personas/index';

import nodemailer from 'nodemailer';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	const { json } = req.body;

	if (req.method == 'POST') {
		let data;
		try {
			data = JSON.parse(json);
		} catch (error) {
			data = json;
		}

		let { reserva, persona } = data;

		let personadb = await buscarPersona(persona.email);

		if (!personadb.persona.length) {
			let nuevaPersona = await crearPersona(persona);

			if (nuevaPersona.code != 201) {
				respuesta = nuevaPersona;
				res.status(respuesta.code).json(respuesta);
			}
		}

		// respuesta.persona = personadb;

		reserva.email = persona.email;

		respuesta = await crearReserva(reserva, persona.nombre);
	}

	if (req.method == 'PUT') {
		let data;

		try {
			data = JSON.parse(json);
		} catch (error) {
			data = json;
		}

		// respuesta.data = data;
		respuesta = await atender(data.id_reservas, data.email, data.fecha_pago);
	}

	res.status(respuesta.code).json(respuesta);
}

async function crearReserva(
	reserva = { id_reserva, email, id_mesa, fecha, costo, fecha_pago },
	nombre
) {
	try {
		let respuesta = await db.query(
			'INSERT INTO reservas (email, id_mesa, fecha) VALUES (?, ?, ?)',
			[reserva.email, reserva.id_mesa, reserva.fecha]
		);

		await db.end();

		await enviarEmail(respuesta.insertId, reserva.email, nombre);

		return { code: 201, mensaje: 'Reserva agregada', respuesta };
	} catch (error) {
		delete error.sql;

		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

async function atender(id_reservas, email, fecha_pago) {
	try {
		let respuesta = await db.query(
			`UPDATE reservas SET fecha_pago = ? WHERE id_reservas = ? AND email=? `,
			[fecha_pago, id_reservas, email]
		);

		return { code: 200, mensaje: 'Reserva actualizada', respuesta };
	} catch (error) {
		delete error.sql;

		return { code: 400, mensaje: 'Algo salio mal', error };
	}
}

async function enviarEmail(id_reserva, email, nombre) {
	try {
		let testAccount = await nodemailer.createTestAccount();

		var transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: process.env.USERMAIL,
				pass: process.env.PASSMAIL
			}
		});

		transporter.verify().then(() => {
			transporter.sendMail({
				from: `Il Ristorante <${process.env.USERMAIL}>`,
				to: `${email}`,
				subject: 'Codigo de reserva',
				text: `Hola ${nombre}, tu codigo de reserva es: ${id_reserva}`
			});
		});
	} catch (error) {
		console.log('No se puede enviar el correo');
		console.log(error);
	}
}

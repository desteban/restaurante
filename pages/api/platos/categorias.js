import { db } from '../../../services/database';

import { CategoriasPlato } from './index';
import { buscarPlato } from './[plato]';

export default async function (req, res) {
	let respuesta = { code: 200, mensaje: 'Todo esta bien' };

	if (req.method == 'POST') {
		let { json } = req.body;

		if (json) {
			let categoriasjson = JSON.parse(json);

			let plato = await buscarPlato(categoriasjson.nom_plato);

			if (plato.platodb) {
				const categorias = categoriasjson.categorias;
				const platodb = plato.platodb[0];

				if (categorias && categorias.length) {
					categorias.map((categoria) => {
						let respuesta = CategoriasPlato(platodb.id_plato, categoria);

						if (respuesta.code != 201) {
							return respuesta;
						}
					});
				}
			}

			if (!plato.platodb) {
				respuesta = { code: 400, mensaje: 'No se encontro el plato' };
			}
		}

		if (!json) {
			respuesta = { code: 400, mensaje: 'No se encontraron categorias' };
		}
	}

	res.status(respuesta.code).json(respuesta);
}

async function agregar_categorias(id_plato, categorias) {}

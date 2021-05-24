import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Menu from '../components/menu';

import { url } from '../services/urls';

function Home({ listaPlatos }) {
	const imagenes = [
		{
			src: 'https://tacos10.com/wp-content/uploads/2019/01/tacos-de-pollo-y-queso.jpg',
			nombre: 'Taco',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_1280.jpg',
			nombre: 'cupcakes',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg',
			nombre: 'pancakes',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg',
			nombre: 'Burritos',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg',
			nombre: 'Pizza',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg',
			nombre: 'Tiramisu',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://media.istockphoto.com/photos/fresh-salad-bowl-with-shrimp-tomato-avocado-and-arugula-on-wooden-picture-id967589370?s=612x612',
			nombre: 'Ensalada',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		}
	];

	return (
		<div>
			<Head>
				<title>Il Ristorante</title>
				<meta
					name="description"
					content="Il ristorante es el mejor lugar para invitar a alguien a comer. ¿Qué vas a pedir?"
				/>
				<meta charset="utf-8" />
				<meta
					name="keywords"
					content="restaurantes, comida mexicana, ristorante, il ristorante"
				/>
				<meta name="robots" content="index" />
			</Head>

			<Menu />

			<main className="contenido">
				<h1 className="center">Il Ristorante</h1>
				<div className="menu">
					{listaPlatos.map((plato) => {
						return (
							<a href={`/plato/${plato.nom_plato}`} key={plato.id_plato}>
								<div className="card_menu">
									<div className="imagen">
										<img src={plato.src} alt={plato.nom_plato} />
									</div>
									<div className="contenido">
										<h3 className="titulo">
											{plato.nom_plato}
											<br />
											<span className="precio">
												$
												{new Intl.NumberFormat('de-DE').format(plato.costo)}
											</span>
										</h3>
										<p className="descripcion">{plato.descripcion}</p>
									</div>
								</div>
							</a>
						);
					})}
				</div>

				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id
						distinctio reprehenderit nam, expedita molestiae voluptate impedit cumque
						tempora repudiandae autem magnam doloremque rem fuga amet ab cupiditate,
						numquam modi.
					</p>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export async function getServerSideProps() {
	let data = [];

	await axios.get(`${url.api}/platos`).then((response) => {
		data = response.data.platos;
	});

	// Pass data to the page via props
	return { props: { listaPlatos: data } };
}

export default Home;

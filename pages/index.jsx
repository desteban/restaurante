import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Menu from '../components/menu';
import { Component } from 'react';

import { url } from '../services/urls';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = { listaPlatos: [], url: props.url, load: true };
	}

	render() {
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

					<meta
						name="author"
						content="Sergio Andrés Blanco García​, Nicolas Santiago Sosa Jimenez, David Esteban Cubillos Giraldo​, Laura Juliana Rodriguez Castaño
"
					/>
				</Head>

				<Menu />

				<main className="contenido">
					<h1 className="center">Il Ristorante</h1>

					{this.state.load ? (
						<div className="loader">
							<p>Buscando platos</p>
							<div className="lds-dual-ring"></div>
						</div>
					) : null}

					<div className="menu">
						{this.state.listaPlatos.map((plato) => {
							return (
								<Link href={`/plato/${plato.nom_plato}`} key={plato.id_plato}>
									<a>
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
														{new Intl.NumberFormat('de-DE').format(
															plato.costo
														)}
													</span>
												</h3>
												<p className="descripcion">{plato.descripcion}</p>
											</div>
										</div>
									</a>
								</Link>
							);
						})}
					</div>

					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id
							distinctio reprehenderit nam, expedita molestiae voluptate impedit
							cumque tempora repudiandae autem magnam doloremque rem fuga amet ab
							cupiditate, numquam modi. Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Soluta nisi blanditiis, totam magni rem autem sint
							quod, accusamus dolore deleniti voluptas incidunt, ex officiis vero
							corrupti voluptate laborum sit quia! Doloribus quaerat molestias
							voluptate nemo iusto et deleniti earum placeat cupiditate? Sed excepturi
							laudantium saepe, repudiandae fugiat illo sit placeat impedit rerum
							harum dicta deleniti eligendi suscipit amet optio ipsam.
						</p>
					</div>
				</main>

				<Footer />
			</div>
		);
	}

	async componentDidMount() {
		let data;

		await axios
			.get(`${this.state.url.api}/platos`)
			.then((response) => {
				this.setState({ listaPlatos: response.data.platos, load: false });
			})
			.catch((error) => {
				data = [];
			});
	}
}

export async function getServerSideProps() {
	return { props: { url: url } };
}

export default Home;

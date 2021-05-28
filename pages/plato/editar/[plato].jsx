import { Component } from 'react';
import { useRouter } from 'next/router';

import { url } from '../../../services/urls';
import NavMenu from '../../../components/menu';
import Footer from '../../../components/footer';
import axios from 'axios';

class Editar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: props.url,
			plato: props.plato,
			load: true,
			categorias: [],
			costo: '',
			descripcion: '',
			nom_plato: '',
			src: ''
		};
	}

	render() {
		return (
			<div>
				<NavMenu />

				<main className="contenido">
					{this.state.load ? (
						<div className="loader">
							<p>Buscando platos</p>
							<div className="lds-dual-ring"></div>
						</div>
					) : null}

					<h1>{this.state.nom_plato}</h1>

					<div>
						<img src={this.state.src} alt={this.state.nom_plato} />
					</div>
				</main>

				<Footer />
			</div>
		);
	}

	async componentDidMount() {
		await this.buscarPlato();
	}

	async buscarPlato() {
		await axios
			.get(`${this.state.url.api}/platos/${this.state.plato}`)
			.then((response) => {
				const plato = response.data.platodb[0];

				console.log(plato);

				this.setState({
					categorias: plato.categorias,
					costo: plato.costo,
					descripcion: plato.descripcion,
					nom_plato: plato.nom_plato,
					src: plato.src
				});
			})
			.catch((error) => {
				console.error(error);
			});

		this.setState({ load: false });
	}
}

export async function getServerSideProps(ctx) {
	const { plato } = ctx.params;

	return { props: { url: url, plato: plato } };
}

export default Editar;

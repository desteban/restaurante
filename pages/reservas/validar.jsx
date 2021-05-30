import { Component } from 'react';
import Footer from '../../components/footer';
import NavMenu from '../../components/menu';
import Head from 'next/head';

class validarReservas extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Head>
					<title>Validar Reserva - IlRistorante</title>
				</Head>

				<NavMenu />

				<main className="contenido"></main>

				<Footer />
			</div>
		);
	}
}

export default validarReservas;

import { Component } from 'react';
import Footer from '../../components/footer';
import NavMenu from '../../components/menu';

class validarReservas extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<NavMenu />

				<main className="contenido"></main>

				<Footer />
			</div>
		);
	}
}

export default validarReservas;

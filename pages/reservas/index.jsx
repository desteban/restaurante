import { Component } from 'react';
import Head from 'next/head';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

class NuevaReserva extends Component {
	constructor(props) {
		super(props);

		this.state = {
			reserva_fecha: this.Fecha2string()
		};
	}

	Fecha2string = (date = new Date()) => {
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (month < 10) {
			month = `0${month}`;
		}

		if (day < 10) {
			day = `0${day}`;
		}
		return `${year}-${month}-${day}`;
	};

	FinCalendario = (date) => {
		const cal = new Date();
		return `${cal.getFullYear()}-12-31`;
	};

	handleChange = (event) => {
		const fecha = event.target.value;
		this.setState({ reserva_fecha: fecha });
	};

	render() {
		return (
			<div>
				<Head>
					<title>Reservas</title>
				</Head>

				<Menu />

				<div className="espacio">
					<p>Fecha</p>
					<input
						type="date"
						id="reserva_fecha"
						name="reserva_fecha"
						value={this.state.reserva_fecha}
						onChange={this.handleChange}
						max={this.FinCalendario()}
						min={this.Fecha2string(new Date())}
					/>
				</div>

				<Footer />
			</div>
		);
	}
}

export default NuevaReserva;

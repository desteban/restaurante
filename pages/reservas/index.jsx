import { Component } from 'react';
import Head from 'next/head';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Entrada from '../../components/entrada';

class NuevaReserva extends Component {
	constructor(props) {
		super(props);

		this.state = {
			reserva_fecha: this.Fecha2string(),
			nombre: '',
			apellido: '',
			telefono: '',
			num_documento: ''
		};
	}

	cambiarEstado = (event, estado) => {
		this.setState({ [estado]: event.target.value });
	};

	send = () => {
		console.log(this.state);
	};

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
					<meta
						name="description"
						content="Reserva para poder probar nuestros deliciosos platillos, no que quedes con las ganas"
					/>
					<meta charset="utf-8" />
					<meta name="keywords" content="restaurantes, reservas, reserva il ristorante" />
				</Head>

				<Menu />

				<div className="espacio contenido_page">
					<form>
						<div className="input">
							<label htmlFor="tipodoc">Tipo de Documento</label>
							<select name="tipodoc" id="tipodoc">
								<option value="CC">CC</option>
								<option value="Pasaporte">Pasaporte</option>
							</select>
						</div>

						<Entrada
							id="documento"
							label="Documento"
							placeholder="Documento"
							type="number"
							value={this.state.num_documento}
							onChange={(event) => {
								this.cambiarEstado(event, 'num_documento');
							}}
						/>

						<Entrada
							id="nombre"
							label="Nombre"
							placeholder="Nombre"
							value={this.state.nombre}
							onChange={(event) => {
								this.cambiarEstado(event, 'nombre');
							}}
						/>

						<Entrada
							id="apellido"
							label="Apellido"
							placeholder="Apellido"
							value={this.state.apellido}
							onChange={(event) => {
								this.cambiarEstado(event, 'apellido');
							}}
						/>

						<Entrada
							id="telefono"
							label="Telefono"
							type="number"
							placeholder="Telefono"
							value={this.state.telefono}
							onChange={(event) => {
								this.cambiarEstado(event, 'telefono');
							}}
						/>

						<p>Fecha de reserva</p>
						<input
							type="date"
							id="reserva_fecha"
							name="reserva_fecha"
							value={this.state.reserva_fecha}
							onChange={this.handleChange}
							max={this.FinCalendario()}
							min={this.Fecha2string(new Date())}
						/>

						<div className="centro espacio">
							<div className="btn" onClick={this.send}>
								Reservar
							</div>
						</div>
					</form>
				</div>

				<Footer />
			</div>
		);
	}
}

export default NuevaReserva;

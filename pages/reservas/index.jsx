import { Component } from 'react';
import Head from 'next/head';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Entrada from '../../components/entrada';
import Link from 'next/link';
import axios from 'axios';
import { url } from '../../services/urls';

class NuevaReserva extends Component {
	constructor(props) {
		super(props);

		this.state = {
			reserva_fecha: this.Fecha2string(),
			nombre: '',
			apellido: '',
			telefono: '',
			email: '',
			id_mesa: '',
			url: props.url,
			mesas: []
		};
	}

	cambiarEstado = (event, estado) => {
		this.setState({ [estado]: event.target.value });
	};

	send = () => {
		console.log(this.state);

		let reserva = {
			fecha: this.state.reserva_fecha,
			id_mesa: this.state.id_mesa
		};

		let persona = {
			email: this.state.email,
			nombre: this.state.nombre,
			apellido: this.state.apellido
		};

		const json = { reserva, persona };

		axios
			.post(`${this.state.url.api}/reservas`, { json })
			.then((respuesta) => {
				if (respuesta.data.code == 201) {
					alert(`Codigo de reserva ${respuesta.data.respuesta.insertId}`);
				}
			})
			.catch((error) => {
				console.log('Algo salio mal');
				console.error(error);
			});
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

	async componentDidMount() {
		await this.buscarMesas();
	}

	async buscarMesas() {
		await axios
			.get(`${this.state.url.api}/mesas`)
			.then((respuesta) => {
				this.setState({ mesas: respuesta.data.mesas });
			})
			.catch((error) => {
				console.log(error);
			});
	}

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
						<Entrada
							id="email"
							label="Correo electronico"
							placeholder="Correo electronico"
							type="email"
							value={this.state.email}
							onChange={(event) => {
								this.cambiarEstado(event, 'email');
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

						<div className="input centro">
							<label htmlFor="idMesa">Tipo de mesa</label>
							<select
								name="idMesa"
								id="idMesa"
								onChange={(event) => this.cambiarEstado(event, 'id_mesa')}
							>
								<option value="">Seleccionar</option>

								{this.state.mesas.map((mesa) => {
									return (
										<option value={mesa.id_mesa}>
											{mesa.cantidad_sillas} Sillas
										</option>
									);
								})}
							</select>
						</div>

						<div>
							<p>
								Al momento de realizar la reserva aceptas todos los
								<a className="enlace"> terminos y condiciones</a>
							</p>
						</div>

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

export async function getServerSideProps() {
	return { props: { url: url } };
}

export default NuevaReserva;

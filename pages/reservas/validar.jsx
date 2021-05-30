import { Component } from 'react';
import Footer from '../../components/footer';
import NavMenu from '../../components/menu';
import Head from 'next/head';
import { url } from '../../services/urls';

import Entrada from '../../components/entrada';
import axios from 'axios';

// let buscando = false

class validarReservas extends Component {
	constructor(props) {
		super(props);

		this.state = { url: props.url, email: '', buscando: false, reservas: [] };
	}

	render() {
		return (
			<div>
				<Head>
					<title>Validar Reserva - IlRistorante</title>
				</Head>

				<NavMenu />

				<main className="contenido">
					<div>
						<Entrada
							label="Correo electronico"
							name="email"
							id="email"
							placeholder="Correo electronico"
							value={this.state.email}
							onChange={(event) => this.cambiarEstado(event, 'email')}
						/>

						<div className="centro">
							<div className="btn" onClick={() => this.send()}>
								Buscar
							</div>
						</div>
					</div>

					<div className="reservas">
						{this.state.buscando ? (
							<div className="loader">
								<p>Buscando reservas</p>
								<div className="lds-dual-ring"></div>
							</div>
						) : null}

						<div className="lista-reservas">
							{this.state.reservas.map((reserva) => {
								return (
									<div className="card" key={reserva.id_reservas}>
										<p className="titulo centro">{`${reserva.nombre} ${reserva.apellido}`}</p>
										<p className="titulo centro">
											ID: {`${reserva.id_reservas}`}
										</p>

										<div className="contenido">
											<p>{reserva.fecha}</p>
											<p>{reserva.email}</p>
											<div className="centro margen">
												<img
													src="/chair.svg"
													alt="Sillas"
													className="logo"
												/>
												<p className="sillas">{` ${reserva.cantidad_sillas}`}</p>
											</div>
										</div>

										<div className="centro">
											<span className="material-icons click">done</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</main>

				<Footer />
			</div>
		);
	}

	cambiarEstado(event, estado) {
		this.setState({ [estado]: event.target.value });
	}

	send() {
		this.setState({ buscando: true, reservas: [] });

		axios
			.get(`${this.state.url.api}/reservas/${this.state.email}`)
			.then((respuesta) => {
				if (respuesta.data.reservas) {
					this.setState({ reservas: respuesta.data.reservas });
				}

				if (!respuesta.data.reservas) {
					alert('No se encontraron reservas');
				}

				this.setState({ buscando: false });
			})
			.catch((error) => {
				console.log('Algo salio mal');
				this.setState({ buscando: false });
			});
	}
}

export async function getServerSideProps() {
	return { props: { url: url } };
}

export default validarReservas;

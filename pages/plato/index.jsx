import { Component } from 'react';
import axios from 'axios';
import { url } from '../../services/urls';

import Footer from '../../components/footer';
import Menu from '../../components/menu';
import Entrada from '../../components/entrada';

class Plato extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listaPlatos: [],
			url: props.url,
			nom_plato: '',
			src: '',
			costo: '',
			descripcion: 'Un taco que mas',
			categorias: [],
			categoria: '',
			listaCategorias: props.listaCategorias,
			load: true
		};
	}

	render() {
		return (
			<div>
				<Menu />

				<main className="contenido">
					<h1>Platos</h1>

					<div className="dashboard">
						<div className="crearPlato">
							<form>
								<Entrada
									id="nombrePlato"
									label="Nombre del plato"
									placeholder="Nombre del plato"
									value={this.state.nom_plato}
									onChange={(event) => this.cambiarEstado(event, 'nom_plato')}
								/>

								<Entrada
									id="costoPlato"
									label="Costo del plato"
									placeholder="Costo del plato"
									value={this.state.costo}
									type="number"
									onChange={(event) => this.cambiarEstado(event, 'costo')}
								/>

								<div>
									<Entrada
										id="srcPlato"
										label="Url del plato"
										placeholder="Url del plato"
										value={this.state.src}
										onChange={(event) => this.cambiarEstado(event, 'src')}
									/>

									{this.state.src.length ? (
										<img
											className="img-plato-dashboard"
											src={this.state.src}
											alt={this.state.nom_plato}
										/>
									) : null}
								</div>

								<div>
									<label htmlFor="descripcion">Descripcion</label>
									<textarea
										name="descripcion"
										id="descripcion"
										placeholder="Descripcion"
									/>
								</div>

								<div className="input centro">
									<label htmlFor="tipodoc">Categorias</label>
									<select
										name="tipodoc"
										id="tipodoc"
										onChange={(event) => this.cambiarEstado(event, 'categoria')}
									>
										<option value="">Seleccionar</option>

										{this.state.listaCategorias.map((categoria) => {
											return (
												<option
													value={categoria.nom_categoria}
													key={categoria.nom_categoria}
												>
													{categoria.nom_categoria}
												</option>
											);
										})}
									</select>

									<span
										className="material-icons btn-round"
										onClick={() => this.agregarCategoria()}
									>
										add
									</span>
								</div>

								<div className="categorias">
									{this.state.categorias.map((categoria) => {
										return (
											<div className="categoria">
												{categoria.nom_categoria}
											</div>
										);
									})}
								</div>

								<div className="centro espacio">
									<div
										className="btn"
										onClick={() => this.send()}
										value={this.state.descripcion}
										onChange={(event) =>
											this.cambiarEstado(event, 'descripcion')
										}
									>
										Guardar
									</div>
								</div>
							</form>
						</div>

						<div className="listaPlatos">
							<h2>Listado de platos</h2>
							{this.state.load ? (
								<div className="loader">
									<p>Buscando platos</p>
									<div className="lds-dual-ring"></div>
								</div>
							) : null}

							<div className="listado">
								{this.state.listaPlatos.map((plato) => {
									return (
										<div className="card_menu" key={plato.nom_plato}>
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
													<div className="descripcion">
														<div className="ajustes">
															<span class="material-icons">
																delete_outline
															</span>

															<span class="material-icons">
																settings
															</span>
														</div>

														<p className="descripcion">
															{plato.descripcion}
														</p>
													</div>
												</h3>
											</div>
										</div>
									);
								})}
							</div>
						</div>
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

	cambiarEstado = (event, estado) => {
		this.setState({ [estado]: event.target.value });
	};

	send() {
		console.log(this.state);
	}

	agregarCategoria() {
		let categoriasAux = this.state.categorias;

		if (this.state.categoria.length) {
			const categoriaAux = { nom_categoria: this.state.categoria };

			if (this.buscar_arreglo(categoriasAux, categoriaAux)) {
				alert('Esta categoría ya se ha agregado anteriormente ');
			}

			if (!this.buscar_arreglo(categoriasAux, categoriaAux)) {
				categoriasAux.push(categoriaAux);

				this.setState({ categorias: categoriasAux });
			}
		}
	}

	buscar_arreglo(arrCategorias, categoriaBuscar) {
		return arrCategorias.find(
			(categoria) => categoria.nom_categoria == categoriaBuscar.nom_categoria
		);
	}
}

export async function getServerSideProps() {
	let data = [];
	await axios
		.get(`${url.api}/categorias`)
		.then((response) => {
			data = response.data.categorias;
		})
		.catch((error) => {});

	return { props: { url: url, listaCategorias: data } };
}

export default Plato;

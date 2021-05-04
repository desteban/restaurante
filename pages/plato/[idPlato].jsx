import { useRouter } from 'next/router';
import Head from 'next/head';
import Resena from '../../components/resena';
import Link from 'next/link';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

const plato = () => {
	const router = useRouter();
	const { idPlato } = router.query;
	return (
		<div>
			<style jsx>{`
				.cabecera {
					grid-row: 1;
					grid-column: 1/-1;
					padding: 0.5rem;
				}

				.cabecera h1 {
					font-size: 2rem;
					margin: 0px;
				}

				.contenido {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					grid-gap: 1rem;
					background: #eee;
					padding: 1rem;
					margin-bottom: 2rem;
					border-radius: 1rem;
				}

				.img-plato {
					grid-column: 1/-1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				.img-plato img {
					max-width: 100%;
					border-radius: 1rem;
				}

				.descripcion {
					grid-column: 1/-1;
					margin-top: 2rem;
					font-size: 1.2rem;
				}

				@media screen and (max-width: 991px) {
					.item {
						background: white;
						padding: 1rem;
						margin: 0px 5%;
						display: flex;
						align-items: center;
						justify-content: center;
						min-height: 100vh;
					}
				}

				@media screen and (min-width: 992px) {
					.img-plato {
						grid-column: 1/3;
					}

					.descripcion {
						grid-column: 3/5;
					}
				}

				@media screen and (min-width: 1441px) {
					.item {
						display: block;
						min-height: auto;
					}

					.contenido {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						grid-gap: 1rem;
					}

					.img-plato {
						grid-column: 1/2;
					}

					.descripcion {
						grid-column: 2/3;
					}
				}

				.precio {
					font-weight: bold;
				}

				.etiquetas {
					list-style: none;
					padding: 0px;
				}

				.etiquetas li {
					display: inline;
					margin: 0.5rem;
					padding: 0.25rem 0.8rem;
					background: rgb(240, 70, 50);
					border-radius: 1rem;
				}
			`}</style>

			<Head>
				<title> {`Platos - ${idPlato}`} </title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              quod nulla, quibusdam perferendis quasi ut culpa temporibus beatae
              reprehenderit id, deserunt fuga dolorem tenetur blanditiis dicta
              ad minus ab voluptatibus!"
				/>
				<meta name="keywords" content={`${idPlato}, ${idPlato} il ristorante`} />
				<meta charset="utf-8" />
			</Head>

			<Menu />

			<main className="espacio">
				<div className="contenido">
					<div className="cabecera">
						<h1> {idPlato} </h1>
					</div>

					<div className="img-plato">
						<img
							src="https://tacos10.com/wp-content/uploads/2019/01/tacos-de-pollo-y-queso.jpg"
							alt="Plato"
						/>
					</div>
					<div className="descripcion">
						<span className="precio">$15.000</span>
						<ul className="etiquetas">
							<li>Entrada</li>
							<li>Mexicano</li>
						</ul>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod
							nulla, quibusdam perferendis quasi ut culpa temporibus beatae
							reprehenderit id, deserunt fuga dolorem tenetur blanditiis dicta ad
							minus ab voluptatibus!
						</p>
					</div>
				</div>
				<div className="resenas">
					<div className="cabecera">
						<h2 className="titulo">Reseñas</h2>
						<div>
							<p>
								4.5
								<span className="material-icons right gold">star_rate</span>
							</p>
						</div>
					</div>
					<Resena nombre={'David'} rate={4.5} texto="Bueno" />
					<Resena />
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default plato;

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	const imagenes = [
		{
			src: 'https://tacos10.com/wp-content/uploads/2019/01/tacos-de-pollo-y-queso.jpg',
			nombre: 'Taco',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_1280.jpg',
			nombre: 'cupcakes',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src:
				'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
			nombre: 'pancakes',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg',
			nombre: 'Burritos',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src:
				'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			nombre: 'Pizza',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg',
			nombre: 'Tiramisu',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		},
		{
			src:
				'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
			nombre: 'Ensalada',
			precio: '00.000',
			descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla'
		}
	];
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
			</Head>

			<style jsx>{`
				.masonry {
					column-count: 2;
					column-gap: 1rem;
					padding: 0px 5%;
				}

				.item {
					display: inline-block;
					width: 100%;
					cursor: pointer;
					color: black;
					/*border-radius: 1rem;
          box-shadow: 0 1px 5px rgb(128, 126, 121);*/
				}

				img {
					border-radius: 1rem;
					max-width: 100%;
				}

				.item .titulo {
					font-size: 1.3rem;
					margin: 0.2rem 0.8rem;
					display: flex;
					justify-content: space-between;
				}

				@media screen and (min-width: 992px) {
					.masonry {
						column-count: 3;
					}
				}

				@media screen and (min-width: 1441px) {
					.masonry {
						column-count: 4;
					}
				}

				@media screen and (max-width: 991px) {
					.item {
						border-bottom: 2px #eee solid;
						padding: 0.5rem;
						margin-bottom: 1rem;
					}

					.item .titulo {
						font-size: 1.3rem;
						margin: 0.2rem 0.8rem;
						display: flex;
						justify-content: space-between;
						color: black;
					}

					.precio {
						margin: 0.5rem;
						font-size: smaller;
						font-weight: normal;
					}

					.descripcion {
						padding: 0.3rem 1rem;
						margin: 0px;
						color: black;
					}
				}

				.contenido {
					margin: 0px;
				}
			`}</style>

			<h1>Index</h1>
			<div className="masonry">
				{imagenes.map((plato) => {
					return (
						<div className="item card_hover" key={plato.nombre}>
							<Link href={`/plato/${plato.nombre}`}>
								<a>
									<div className="imagen">
										<img src={plato.src} alt={plato.nombre} />
									</div>
									<div className="contenido hover_content">
										<h3 className="titulo">
											{plato.nombre}{' '}
											<span className="precio"> ${plato.precio} </span>
										</h3>
										<p className="descripcion">{plato.descripcion}</p>
									</div>
								</a>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

import Head from 'next/head';
import Menu from '../components/menu';

export default function contacto() {
	return (
		<div>
			<style jsx>{`
				.mapa {
					width: 100%;
					height: 250px;
					margin-bottom: 1rem;
				}

				.centro {
					text-align: center;
				}

				.texto {
					margin: 3rem 0px;
				}

				.restaurante {
					width: 100;
					height: 100vh;
				}

				.restaurante img {
					height: 100vh;
					width: 100%;
					object-fit: cover;
				}

				.nombre {
					width: 100%;
					margin: 0;
					position: absolute;
					height: 100vh;
					color: white;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.nombre .titulo {
					font-size: 4rem;
				}
			`}</style>

			<Head>
				<title>Contacto</title>
			</Head>

			<Menu />

			<div className="restaurante">
				<div className="nombre">
					<h1 className="titulo">Il Ristorante</h1>
				</div>
				<img
					src="https://cnnespanol.cnn.com/wp-content/uploads/2019/01/Galerias-nuevos-restaurantes-2019-CNN-1.jpg?quality=100&strip=info"
					alt="restaurante"
				/>
			</div>

			<div className="contenido">
				<div className="texto">
					<h2 className="centro">Contacto</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda
						modi nam consequuntur maxime culpa natus, vero laudantium, neque rem
						asperiores, odio numquam dignissimos esse! Iure minus repellat ratione
						exercitationem. Maiores ab eveniet cum architecto veritatis officia nihil
						tempora minima illo! Ducimus amet sit laborum corrupti aut temporibus fugiat
						neque. Ad, dicta soluta! Cumque possimus autem, architecto vitae at quidem!
						Tempora voluptas adipisci sed voluptatem obcaecati itaque ipsam libero,
						quaerat dolore consequatur deserunt dolor debitis iure voluptates recusandae
						perspiciatis blanditiis ducimus minima error modi quisquam totam nostrum
						architecto nobis! Velit! Minus tenetur cupiditate, in quo recusandae fuga
						aut vel! Accusamus iure maxime architecto cupiditate. Dolore eaque, minus
						cum deserunt dolores perferendis nam quisquam molestias est optio suscipit
						rerum non placeat? Dolor dolores nesciunt voluptatibus iure reprehenderit.
						Quidem quasi ipsa officiis esse, sunt deserunt quia, inventore temporibus
						hic atque officia. Quisquam vitae impedit illum facilis veritatis eos soluta
						cumque laboriosam totam? Consectetur aliquid exercitationem, provident
						voluptatibus voluptas veritatis necessitatibus, illo dicta sequi iusto
						deserunt veniam accusamus molestias non est fuga sunt animi repudiandae eos
						ipsam enim fugit, quasi quod! Commodi, tenetur.
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat fugiat
						deleniti illum quasi unde a, possimus dolore explicabo accusantium culpa
						doloribus modi ut quibusdam reiciendis ea ex veritatis laborum corrupti?
					</p>
				</div>

				<div className="mapa-container">
					<h3 className="centro">Direcciones</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31827.074392134517!2d-74.40188200925698!3d4.338747139987136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f04f7770f3b97%3A0x90b173ecbe09c570!2sFusagasug%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1617126230210!5m2!1ses!2sco"
						allowfullscreen="Hola"
						loading="lazy"
						className="mapa"
					></iframe>
				</div>
			</div>
		</div>
	);
}

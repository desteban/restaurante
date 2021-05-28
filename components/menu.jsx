import Link from 'next/link';

let opcion = ['menu', 'close'];
export default function menu() {
	return (
		<nav className="nav fixed">
			<div className="brand">
				<Link href="/">
					<a>
						<span className="logo">Il Ristorante</span>
					</a>
				</Link>
			</div>

			<div className="nav-opciones menu-oculto" id="nav-opciones">
				<Link href="/">
					<div className="item-nav" onClick={() => ocultarMenu()}>
						<img src="/menu.svg" alt="" className="icono click" />
						<a>Menu</a>
					</div>
				</Link>

				<Link href="/reservas">
					<div className="item-nav dividir" onClick={() => ocultarMenu()}>
						<img src="/recepcion.svg" alt="" className="icono click" />
						<a>Reservas</a>
					</div>
				</Link>

				<Link href="/contacto">
					<div className="item-nav dividir" onClick={() => ocultarMenu()}>
						<a>Acerca de nosotros </a>
					</div>
				</Link>
			</div>

			<div className="burger" onClick={() => ocultarMenu()}>
				<span className="material-icons">{opcion[0]}</span>
			</div>
		</nav>
	);
}

function ocultarMenu() {
	let opciones = document.getElementById('nav-opciones');
	opciones.classList.toggle('menu-oculto');
	opcion.reverse();
}

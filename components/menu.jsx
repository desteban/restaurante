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
				<div className="item-nav">
					<Link href="/">
						<a onClick={() => ocultarMenu()}>Menu</a>
					</Link>
				</div>

				<div className="item-nav dividir">
					<Link href="/reservas">
						<a onClick={() => ocultarMenu()}>Reservas</a>
					</Link>
				</div>
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

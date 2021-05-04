import Link from 'next/link';

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

			<div className="nav-opciones">
				<div className="item-nav">
					<Link href="/">
						<a>Menu</a>
					</Link>
				</div>

				<div className="item-nav dividir">
					<Link href="/reservas">
						<a>Reservas</a>
					</Link>
				</div>
			</div>

			<span className="material-icons burger">menu</span>
		</nav>
	);
}

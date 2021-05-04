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
				<Link href="/">
					<a className="item-nav">op1</a>
				</Link>
				<Link href="/">
					<a className="item-nav">op2</a>
				</Link>
				<Link href="/">
					<a className="item-nav">op3</a>
				</Link>
			</div>

			<span class="material-icons burger">menu</span>
		</nav>
	);
}

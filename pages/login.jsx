import { Component } from 'react';
import axios from 'axios';
import Entrada from '../components/entrada';
import Link from 'next/link';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = { email: '', send: false };
	}

	render() {
		return (
			<div className="col-2">
				<div className="login">
					<h1>Iniciar sesion</h1>
					<div className="step1">
						<Entrada
							label="Correo electronico"
							id="email"
							placeholder="Correo electronico"
							type="email"
							value={this.state.email}
							onChange={(event) => {
								this.cambiarEstado(event, 'email');
							}}
						/>
						<div className="btn-round center">Enviar Correo</div>

						<div className="tohome">
							<Link href="/">
								<a>Inicio</a>
							</Link>
						</div>
					</div>

					<div className="step2 hide"></div>
				</div>
			</div>
		);
	}

	cambiarEstado = (event, estado) => {
		this.setState({ [estado]: event.target.value });
	};
}

export default Login;

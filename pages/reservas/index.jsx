import { Component } from "react";
import Head from "next/head";

class NuevaReserva extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reserva_fecha: this.Fecha2string(new Date()),
    };
  }

  Fecha2string = (date) => {
    return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
  };

  FinCalendario = (date) => {
    const cal = new Date();
    return `${cal.getFullYear()}-12-31`;
  };

  handleChange = (event) => {
    const fecha = event.target.value;
    this.setState({ reserva_fecha: fecha });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Reservas</title>
        </Head>

        <div className="contenido">
          <p>Fecha</p>
          <input
            type="date"
            id="reserva_fecha"
            name="reserva_fecha"
            value={this.state.reserva_fecha}
            onChange={this.handleChange}
            max={this.FinCalendario()}
            min={this.Fecha2string(new Date())}
          />
        </div>
      </div>
    );
  }
}

export default NuevaReserva;

import { Component } from "react";
import Head from "next/head";

class crearPersona extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipodoc: "CC",
      documento: "",
      telefono: "",
      nombre: "",
      apellido: "",
    };
  }

  cambiarEstado = (event, estado) => {
    this.setState({ [estado]: event.target.value });
  };

  send = () => {
    console.log("estado");
    console.log(this.state);
  };

  render() {
    return (
      <div className="contenido">
        <Head>
          <title>Registrar Empleado</title>
        </Head>

        <style jsx>{`
          .espacio {
            margin-top: 2rem;
          }

          .contenido-form {
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @media screen and (min-width: 992px) {
            .doble {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>
        <div className="doble">
          <div className="">
            <h1 className="center">Registrar empleado</h1>

            <form className="formulario">
              <div className="input">
                <label htmlFor="tipodoc">Tipo de Documento</label>
                <select
                  name="tipodoc"
                  id="tipodoc"
                  value={this.state.tipodoc}
                  onChange={(event) => {
                    this.cambiarEstado(event, "tipodoc");
                  }}
                >
                  <option value="CC">CC</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="documento">Documento</label>
                <input
                  type="number"
                  id="documento"
                  name="documento"
                  value={this.state.documento}
                  onChange={(event) => {
                    this.cambiarEstado(event, "documento");
                  }}
                  autoComplete="off"
                  placeholder="Numero de documento"
                />
              </div>

              <div className="input">
                <label htmlFor="telefono">Telefono</label>
                <input
                  type="number"
                  name="telefono"
                  value={this.state.telefono}
                  onChange={(event) => {
                    this.cambiarEstado(event, "telefono");
                  }}
                  id="telefono"
                  placeholder="Telefono"
                />
              </div>

              <div className="input">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={(event) => {
                    this.cambiarEstado(event, "nombre");
                  }}
                  autoComplete="off"
                  placeholder="Nombre"
                />
              </div>

              <div className="input">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={this.state.apellido}
                  onChange={(event) => this.cambiarEstado(event, "apellido")}
                  autoComplete="off"
                  placeholder="Apellido"
                />
              </div>

              <div className="centro espacio">
                <div className="send" onClick={this.send}>
                  Registrar
                </div>
              </div>
            </form>
          </div>

          <div className="contenido-form">
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                reprehenderit quos delectus id in repellat doloribus earum nemo
                aspernatur deserunt veritatis voluptate magni itaque maxime, et
                illum error voluptatibus pariatur!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default crearPersona;

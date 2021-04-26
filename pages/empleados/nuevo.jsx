import { Component } from "react";
import Head from "next/head";

class crearPersona extends Component {
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
                <select name="tipodoc" id="tipodoc">
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
                  autocomplete="off"
                  placeholder="Numero de documento"
                />
              </div>

              <div className="input">
                <label htmlFor="telefono">Telefono</label>
                <input
                  type="number"
                  name="telefono"
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
                  autocomplete="off"
                  placeholder="Nombre"
                />
              </div>

              <div className="input">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  autocomplete="off"
                  placeholder="Apellido"
                />
              </div>

              <div className="centro espacio">
                <button className="send">Registrar</button>
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

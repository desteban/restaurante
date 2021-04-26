export default function resena(props) {
  return (
    <div className="item">
      <div className="cabecera-item">
        <p className="titulo-item">{props.nombre ? props.nombre : "Reseñas"}</p>
        <div>
          <p>
            {props.rate ? props.rate : 0.0}
            <span className="material-icons right gold">star_rate</span>
          </p>
        </div>
      </div>
      <p>
        {props.texto
          ? props.texto
          : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod nulla, quibusdam perferendis quasi ut culpa temporibus beatae reprehenderit id,"}
      </p>
    </div>
  );
}

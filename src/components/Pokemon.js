import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="Pokemon card shadow-sm mb-4 text-center">
      <div classname="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon!" : "Not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying:
          {props.terrifying ? `OMG YES NIGHTMARES!` : "Nah, awesome!"}
          <br />
          {props.abilities.length} abilities
        </p>
        <ul className="list-group list-group-flush">
          {props.abilities.map((ability, index) => {
            return (
              <li key={index} className="list-group-item">
                {ability}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

import Moyenne from "./Moyenne.jsx";

const Student = (props) => {
  return (
    <article>
      <h3>{props.name}</h3>

      <ul>
        {props.notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>

      <p>
        Moyenne : <Moyenne notes={props.notes} />
      </p>
    </article>
  );
};

export default Student;

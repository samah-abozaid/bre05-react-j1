const Student = (props) => {
  return (
    <article>
      <h3>{props.name}</h3>       
      <ul>
        {props.notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </article>
  );
};

export default Student;

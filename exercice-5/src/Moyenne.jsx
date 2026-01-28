const Moyenne = (props) => {
  // reduce : calcule la somme des notes
  const total = props.notes.reduce((sum, note) => sum + note, 0);
  const moyenne = total / props.notes.length;

  return <span>{moyenne.toFixed(2)}</span>;
};

export default Moyenne;

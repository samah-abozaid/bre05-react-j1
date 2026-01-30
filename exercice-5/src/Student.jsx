const Student =(props)=>{
  const average =
    props.student.notes.reduce((sum, note) => sum + note, 0) / props.student.notes.length;
  return(
    <article>
    <h3>{props.student.name}</h3>
    <ul>
    {
      props.student.notes.map((student, i)=> <li key={i}> {props.student.notes[i]}</li>)
    }
    </ul>
    <p>Moyenne: {average}</p>
    </article>
    
    )
}
export default Student;


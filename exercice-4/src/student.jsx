const Student = (props)=>{    //composant student
  return(
    // article with the name of chaque student avec un list de note 
    
    <article>
    <h3>{props.student.name}</h3>
    <ul>
    {
      props.student.notes.map((student , i)=><li key={i}>{props.student.notes[i]}</li>)
    }
    </ul>
    </article>
    
    )
}

export default Student 
import './App.css';
import Student from './student.jsx';



function App() {
    const students = [
    { name: "Alan", notes: [12, 11, 10] },
    { name: "Alice", notes: [18, 10, 19] },
    { name: "Bernard", notes: [10, 9, 11] },
    { name: "Sophie", notes: [11, 17, 19] },
  ];
  

  return (
    <section>
      <h2>Étudiant-e-s</h2>
      <ul>
        {students.map((student, i) => (
          <li key={i}>
            {/* on passe les props ici */}
            <Student name={student.name} notes={student.notes} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
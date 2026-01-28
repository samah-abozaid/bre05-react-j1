import './App.css';
import Recipes from './ingredient.jsx';

function App() {
  const myClass = {
    listStyleType: 'none',
    color: 'blue',
    marginTop: '5px'
  };

  return (
    <Recipes style={myClass} />
  );
}

export default App;

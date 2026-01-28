import Steps from'./step.jsx';
const Recipes = (props) => {
  const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];

  return (
    <article>
      <h2>La recette de la pâte à crêpes</h2>

      <h3>Ingrédients</h3>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>

      <Steps />
    </article>
  );
};

export default Recipes;
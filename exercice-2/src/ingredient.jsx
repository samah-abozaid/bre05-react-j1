const Recipes = (props) => {
  const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];
  return (
    <article>
      <h2>La recette de la pâte à crêpes</h2>
      <h3>Ingrédients</h3>
      <ul style={props.style}>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
    </article>
  );
};

export default Recipes;

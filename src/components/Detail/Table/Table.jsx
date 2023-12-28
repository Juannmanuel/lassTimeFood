import style from "./Table.module.css";

function Table({ ingredients, quantity }) {
  return (
    <div>
      <table className={style.ingredients_table}>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {ingredients?.map((ingredient, index) => (
            <tr key={index}>
              <td>{ingredient}</td>
              <td>{quantity[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table
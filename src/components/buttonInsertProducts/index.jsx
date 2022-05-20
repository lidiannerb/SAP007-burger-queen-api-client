const ButtonInsertProducts = ({addProduct}) => {
  return  (
    <article className="insert-remove-products">
      <button className="insert-remove" onClick={addProduct}></button>
    </article>
  );
};

export default ButtonInsertProducts;
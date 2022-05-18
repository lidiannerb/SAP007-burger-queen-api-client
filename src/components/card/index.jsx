export const Card = ({ image, price }) => {
  return (
    < article>
      <div>
        <img src={image} alt="ItemCard " />
      </div>
      <p>Preço: R${price}</p>

    </article>
  );
};
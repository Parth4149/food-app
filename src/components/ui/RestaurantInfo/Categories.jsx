import ItemCards from "./ItemCards";

const Categories = ({ card }) => {
  return card?.categories.map((card) => (
    <div className="categories-container" key={card?.title}>
      <details className="mt-24">
        <summary>
          {card?.title} ({card?.itemCards?.length})
        </summary>
        <ItemCards card={card} />
      </details>
    </div>
  ));
};

export default Categories;

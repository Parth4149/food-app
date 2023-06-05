import ItemCards from "./ItemCards";
import Categories from "./Categories";

const RestaurantInfoSection = ({ card }) => {
  // const {}

  return (
    <section className="restinfo-section">
      <details className="mt-24">
        <summary>
          {card?.title}{" "}
          {"itemCards" in card && <span>{`(${card?.itemCards.length})`}</span>}
        </summary>
        {"itemCards" in card && <ItemCards card={card} />}
        {"categories" in card && <Categories card={card} />}
      </details>
      <div className="section-border"></div>
    </section>
  );
};

export default RestaurantInfoSection;

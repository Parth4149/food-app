import ItemCards from "./ItemCards";
import Categories from "./Categories";
import TopPickSection from "../RestaurantInfo/TopPickSection";

const RestaurantInfoSection = ({ restaurantInfoSectionData }) => {
  const openIdx =
    restaurantInfoSectionData[1]?.card?.card?.title === "Top Picks" ? 2 : 1;

  return (
    <section className="restinfo-section-container">
      {restaurantInfoSectionData.map(({ card }, index) => {
        if (card?.card?.title === undefined) {
          return;
        }
        return card?.card?.card?.title === "Top Picks" ? (
          <TopPickSection key={card?.card?.title} />
        ) : (
          <section className="restinfo-section" key={card?.card?.title}>
            <details className="mt-24" open={index === openIdx ? true : false}>
              <summary>
                {card?.card?.title}{" "}
                {"itemCards" in card?.card && (
                  <span>{`(${card?.card?.itemCards.length})`}</span>
                )}
              </summary>
              {"itemCards" in card?.card && <ItemCards card={card.card} />}
              {"categories" in card?.card && <Categories card={card.card} />}
            </details>
            <div className="section-border"></div>
          </section>
        );
      })}
    </section>
  );
};

export default RestaurantInfoSection;

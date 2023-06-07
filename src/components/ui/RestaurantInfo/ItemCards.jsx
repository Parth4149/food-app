import { IMG_CDN_URL } from "../../../data";

const ItemCards = ({ card }) => {

  return card.itemCards.map((item) => (
    <div className="restinfo-section-inner" key={item?.card?.info?.id}>
      <div>
        <h4>{item?.card?.info?.name}</h4>
        <h5>
          ₹{" "}
          {(!item?.card?.info?.defaultPrice
            ? item?.card?.info?.price
            : item?.card?.info?.defaultPrice) / 100}
        </h5>
      </div>
      <figure>
        {item?.card?.info?.imageId ? (
          <img
            src={IMG_CDN_URL + item?.card?.info?.imageId}
            alt={item?.card?.info?.name}
          />
        ) : (
          <div id="no-restinfo-section-img"></div>
        )}
      </figure>
    </div>
  ));
};

export default ItemCards;

import { IMG_CDN_URL } from "../../data";

const ItemCards = ({ card }) => {
  return card.itemCards.map((item) => (
    <div className="restinfo-section-inner" key={item?.card?.info?.id}>
      {/* {console.log(item?.card?.info)} */}
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
        <img
          src={IMG_CDN_URL + item?.card?.info?.imageId}
          alt={item?.card?.info?.name}
        />
      </figure>
    </div>
  ));
};

export default ItemCards;

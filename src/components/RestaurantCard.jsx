import { IMG_CDN_URL } from "../data";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoString } =
    props;
  return (
    <article className="restaurant__card">
      <div className="restaurant__card__inner">
        <figure className="restaurant__img">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        </figure>
        <h4 className="restaurant__name">{name}</h4>
        <p className="cuisines">{cuisines.join()}</p>
        <div className="rating_const">
          <span>⭐ {avgRating}</span>
          <span>{costForTwoString}</span>
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;

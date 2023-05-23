const ShimmerRestaurantCard = () => {
  return (
    <div className="restaurant__card__inner shimmer">
      <figure className="restaurant__img shimmer__bg"></figure>
      <div className="restaurant__name shimmer__bg"></div>
      <p className="cuisines shimmer__bg"></p>
      <div className="rating_const">
        <span className="shimmer__bg"></span>
        <div className="shimmer__bg"></div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard;

const SkeletonRestaurantCard = () => {
  return (
    <div className="restaurant__card__inner skeleton">
      <figure className="restaurant__img skeleton-bg"></figure>
      <div className="restaurant__name skeleton-bg"></div>
      <p className="cuisines skeleton-bg"></p>
      <div className="rating_const">
        <span className="skeleton-bg"></span>
        <div className="skeleton-bg"></div>
      </div>
    </div>
  );
};

export default SkeletonRestaurantCard;

import SkeletonRestaurantCard from "./ui/SkeletonRestaurantCard";

const Skeletons = () => {
  return (
    <section className="seeAllRestaurants">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <article className="restaurant__card" key={i}>
            <SkeletonRestaurantCard />
          </article>
        ))}
    </section>
  );
};

export default Skeletons;

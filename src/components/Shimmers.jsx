import ShimmerRestaurantCard from "./ui/ShimmerRestaurantCard";

const Shimmers = () => {
  return (
    <section className="seeAllRestaurants">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <article className="restaurant__card" key={i}>
            <ShimmerRestaurantCard />
          </article>
        ))}
    </section>
  );
};

export default Shimmers;

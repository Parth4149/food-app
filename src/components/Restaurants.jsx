import RestaurantCard from "./RestaurantCard";

const Restaurants = ({ restaurants }) => {
  return (
    <section className="seeAllRestaurants">
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.id} />
      ))}
    </section>
  );
};

export default Restaurants;

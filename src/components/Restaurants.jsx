import RestaurantCard from "./ui/RestaurantCard";

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

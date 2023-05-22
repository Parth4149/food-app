import { useState } from "react";
import { restaurantsData } from "../data.js";
import Search from "./ui/Search.jsx";
import Restaurants from "./Restaurants";
const Body = () => {
  const restaurantList = restaurantsData.cards[0].data.data.cards;
  const [restaurants, SetRestaurants] = useState(restaurantList);

  return (
    <main className="body">
      <Search restaurantList={restaurantList} SetRestaurants={SetRestaurants} />
      <Restaurants restaurants={restaurants} />
    </main>
  );
};

export default Body;

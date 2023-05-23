import { useState, useEffect } from "react";
import { restaurantsData } from "../data.js";
import Search from "./ui/Search.jsx";
import Restaurants from "./Restaurants";
const Body = () => {
  const restaurantList = restaurantsData.cards[0].data.data.cards;
  const [restaurants, SetRestaurants] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5645175&lng=72.928871&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    SetRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <main className="body">
      <Search restaurantList={restaurantList} SetRestaurants={SetRestaurants} />
      <Restaurants restaurants={restaurants} />
    </main>
  );
};

export default Body;

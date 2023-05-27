import { useState, useEffect } from "react";
import Search from "./ui/Search.jsx";
import Restaurants from "./Restaurants";
import Shimmers from "./Shimmers";
import ShimmerRestaurantCard from "./ui/ShimmerRestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5645175&lng=72.928871&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    const cards = json?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(cards);
    setRestaurants(cards);
  }

  return (
    <main className="body">
      <Search
        allRestaurants={allRestaurants}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
      {allRestaurants?.length === 0 ? (
        <Shimmers />
      ) : (
        <Restaurants restaurants={restaurants} />
      )}
    </main>
  );
};

export default Body;

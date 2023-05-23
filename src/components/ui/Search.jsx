import { useState } from "react";

const filteredRestaurants = (searchText, restaurantList) => {
  return restaurantList?.filter((restaurant) => {
    if (restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())) {
      console.log(restaurant);
      return restaurant;
    }
  });
};

const Search = ({ restaurantList, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // if query is empty
    if (searchText === "") {
      setRestaurants(restaurantList);
      return;
    }

    setRestaurants(filteredRestaurants(searchText, restaurantList));
  };

  return (
    <section className="search__container">
      <div className="search__container__inner">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Search;

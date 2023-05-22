import { useState } from "react";

const Search = ({ restaurantList, SetRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // if query is empty
    if (searchText === "") {
      SetRestaurants(restaurantList);
      return;
    }
    const filteredRestaurants = restaurantList.filter((restaurant) => {
      if (
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return restaurant;
      }
    });
    SetRestaurants(filteredRestaurants);
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

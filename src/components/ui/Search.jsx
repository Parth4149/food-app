import { useState } from "react";

const filteredRestaurants = (searchText, allRestaurants) => {
  return allRestaurants?.filter((restaurant) => {
    if (restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())) {
      return restaurant;
    }
  });
};

const Search = ({ allRestaurants, restaurants, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // if query is empty
    if (searchText === "") {
      setRestaurants(allRestaurants);
      return;
    }

    const filteredData = filteredRestaurants(searchText, allRestaurants);
    setRestaurants(filteredData);
  };
  return (
    <>
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
      {allRestaurants.length > 0 && restaurants?.length === 0 && (
        <article style={{ textAlign: "center", margin: "2rem 0"}}>
          <h3>No match found for &quot;{searchText}&quot;</h3>
        </article>
      )}
    </>
  );
};

export default Search;

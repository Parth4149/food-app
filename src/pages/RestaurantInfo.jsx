import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../src/data";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [recommendedRestaurantData, setRecommendedRestaurantData] =
    useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5645175&lng=72.928871&restaurantId=${restaurantId}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
    json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach(
      (card) => {
        if (card?.card?.card?.title === "Recommended") {
          console.log(card?.card?.card?.title, card?.card?.card?.itemCards);
          setRecommendedRestaurantData(card?.card?.card?.itemCards);
        }
      }
    );
    if (
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.title === "Recommended"
    ) {
      setRecommendedRestaurantData(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    }
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
  }
  console.log("recommended",recommendedRestaurantData);
  return (
    <main className="restaurantInfo-main">
      {!restaurantData ? (
        <section>
          <h2>Loading...</h2>
        </section>
      ) : (
        <section>
          <div>
            <img
              src={IMG_CDN_URL + restaurantData?.cloudinaryImageId}
              alt={restaurantData.name}
            />
            <h2>Name {restaurantData?.name}</h2>
            <p>{restaurantData?.cuisines.join(", ")}</p>
            <p>{restaurantData?.areaName}</p>
            <div>⭐ {restaurantData?.avgRating}</div>
          </div>
        </section>
      )}

      {!recommendedRestaurantData ? (
        <section>
          <h2>Loading...</h2>
        </section>
      ) : (
        <section className="recommended">
          <h3 className="mt-24">Recommended</h3>
          {recommendedRestaurantData.map((item) => (
            <div className="recommended-inner" key={item?.card?.info?.id}>
              {/* {console.log(item?.card?.info)} */}
              <div>
                <h4>{item?.card?.info?.name}</h4>
                <h5>
                  ₹{" "}
                  {(!item?.card?.info?.defaultPrice
                    ? item?.card?.info?.price
                    : item?.card?.info?.defaultPrice) / 100}
                </h5>
              </div>
              <figure>
                <img
                  src={IMG_CDN_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
              </figure>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default RestaurantInfo;

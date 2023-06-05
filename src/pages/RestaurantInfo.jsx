import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../src/data";
import TopPickSection from "../components/ui/TopPickSection";
import RestaurantInfoSection from "../components/ui/RestaurantInfoSection";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantInfoSectionData, setRestaurantInfoSectionData] =
    useState(null);
  // const [recommendedRestaurantData, setRecommendedRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5645175&lng=72.928871&restaurantId=${restaurantId}&submitAction=ENTER`
    );
    const json = await data.json();
    // json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach(
    //   (card) => {
    //     if (card?.card?.card?.title === "Recommended") {
    //       console.log(card?.card?.card?.itemCards);
    //       setRestaurantInfoSectionData(card?.card?.card?.itemCards);
    //     }
    //   }
    // );
    // json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    setRestaurantInfoSectionData(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
  }
  // console.log("recommended", restaurantInfoSectionData);
  console.log(document.querySelector(".restinfo-section details")?.open);

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
            <h2>{restaurantData?.name}</h2>
            <p>{restaurantData?.cuisines.join(", ")}</p>
            <p>{restaurantData?.areaName}</p>
            <div>⭐ {restaurantData?.avgRating}</div>
          </div>
        </section>
      )}
      {!restaurantInfoSectionData ? (
        <section>
          <h2>Loading...</h2>
        </section>
      ) : (
        <section className="restinfo-section-container">
          {restaurantInfoSectionData.map((card) => {
            if (card?.card?.card?.title === undefined) {
              return;
            }
            return card?.card?.card?.title === "Top Picks" ? (
              <TopPickSection />
            ) : (
              <RestaurantInfoSection card={card?.card?.card} />
            );
          })}
        </section>
      )}
    </main>
  );
};

export default RestaurantInfo;

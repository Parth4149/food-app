import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../src/data";
import RestaurantInfoSection from "../components/ui/RestaurantInfo/RestaurantInfoSection";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const RestaurantInfo = () => {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantInfoSectionData, setRestaurantInfoSectionData] =
    useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5645175&lng=72.928871&restaurantId=${restaurantId}&submitAction=ENTER`
      );
      const json = await data.json();
      setRestaurantInfoSectionData(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
      setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
    } catch (err) {
      console.log("Error", err);
      navigate("/error");
      return;
    }
  }
  // console.log("recommended", restaurantInfoSectionData);

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
        <RestaurantInfoSection
          restaurantInfoSectionData={restaurantInfoSectionData}
        />
      )}
    </main>
  );
};

export default RestaurantInfo;

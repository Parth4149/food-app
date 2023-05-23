import { useEffect, useRef, useState } from "react";

import { IMG_CDN_URL } from "../../data";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoString } =
    props;
  const imageSrc = `${IMG_CDN_URL + cloudinaryImageId}`;

  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;
    console.log(image);
    // image.onload = () => {
    mountedRef.current = setTimeout(() => {
      setImg(image);
    }, 300);
    // };
    return () => {
      // when the component unmounts // cleanup
      clearInterval(mountedRef.current);
    };
  }, []);

  return (
    <article className="restaurant__card">
      {img ? (
        <div className="restaurant__card__inner">
          <figure className="restaurant__img">
            <img src={img.src} alt={name} />
          </figure>
          <h4 className="restaurant__name">{name}</h4>
          <p className="cuisines">{cuisines.join()}</p>
          <div className="rating_const">
            <span>⭐ {avgRating}</span>
            <span>{costForTwoString}</span>
          </div>
        </div>
      ) : (
        <ShimmerRestaurantCard />
      )}
    </article>
  );
};

export default RestaurantCard;

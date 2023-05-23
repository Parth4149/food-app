import { useEffect, useRef, useState } from "react";

import { IMG_CDN_URL } from "../../data";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
/**
 *  setTimeout() returns a timeoutID which is a positive integer identifying the
 *  timer created as a result of calling the method. The timeoutID can be used to
 *  cancel timeout by passing it to the clearTimeout() method.
 */
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoString } =
    props;
  const imageSrc = cloudinaryImageId && `${IMG_CDN_URL + cloudinaryImageId}`;
  const [img, setImg] = useState(null);
  const mountedRef = useRef();

  useEffect(() => {
    if (imageSrc === undefined) {
      return;
    }
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      mountedRef.current = setTimeout(() => {
        setImg(image);
      }, 200);
    };

    return () => {
      // when the component unmounts // cleanup
      clearInterval(mountedRef.current);
    };
  }, [imageSrc]);

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

import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

console.log(styles);
const Card = ({
  id,
  title,
  imgUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added,
  loading = false,
}) => {
  const [isAdded, setIsadded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const data = { id, title, imgUrl, price };

  const onClickPlus = () => {
    onPlus({ data });
    setIsadded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ data });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>

          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              width={14}
              height={14}
              src={isFavorite ? "/img/liked.png" : "/img/unlike.png"}
              alt="Unlike"
            />
          </div>
          <img width='100%' height={135} src={imgUrl} alt="img" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center ">
            <div className="d-flex flex-column">
              <span>Qiymet</span>
              <b>{price} AZN</b>
            </div>

            <img
              className={styles.plus}
              onClick={onClickPlus}
              width={15}
              height={15}
              src={isAdded ? "/img/correct.png" : "/img/plus3.png"}
              alt="Plus"
            />
          </div>
      
  
    </div>
  );
};

export default Card;

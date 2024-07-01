import React from 'react';
import styles from './Card.module.scss' 


function Card( {imageUrl, title, price, onPlus, onFavorite}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState();

    const onClickPlus = () => {
        onPlus({imageUrl, title, price,});
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({imageUrl, title, price,});
        setIsFavorite(!isFavorite)
    }

    return (
    <div className={styles.card}>
    <div className={styles.favorite} onClick={onClickFavorite}>
    <img src={isFavorite ? "/img/heart-liked.svg":"/img/heart-unliked.svg" } alt="Unliked"/>
    </div>
    <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
    <h5>{title}</h5>
    <div className={styles.cardBottom}>
    <div className={styles.cardInfo}>
    <span>Price:</span>
    <b>{price}$</b>
    </div>
    <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-cheked.svg" : "/img/plus.svg"} alt="Plus"/>
    </div>
    </div>
    )
}
export default Card;
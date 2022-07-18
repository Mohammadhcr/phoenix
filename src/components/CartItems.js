import React from 'react';
import styles from '../components/CardItems.module.scss';

const CartItems = (props) => {

    const {item, info, itemContent, itemPhoto, itemPrice, itemTitle, itemSubtitle, price, dltBtn, trash} = styles;
    const {artwork, album, artist} = props;

    return (
        <>
            <div className={item}>
                <div className={info}>
                    <div className={itemPhoto}>
                        <img src={artwork} alt="Artwork" />
                    </div>
                    <div className={itemContent}>
                        <h2 className={itemTitle}>{album}</h2>
                        <h3 className={itemSubtitle}>{artist}</h3>
                    </div>
                </div>
                <div className={itemPrice}>
                    <div className={price}>${props.price}</div>
                    <div className={dltBtn}><i className={`bx bx-trash ${trash}`}></i></div>
                </div>
            </div>
        </>
    );
};

export default CartItems;
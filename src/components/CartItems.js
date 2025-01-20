import React, { useContext } from 'react';
import styles from '../styles/CartItems.module.scss';

import { CartContext } from '../context/CartContextProvider';

const CartItems = (props) => {

    const {item, info, itemContent, itemPhoto, itemPrice, itemTitle, itemSubtitle, price, dltBtn, x} = styles;
    const {artwork, album, artist} = props;
    const {dispatch} = useContext(CartContext);

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
                    <div className={dltBtn} onClick={() => dispatch({type: "REMOVE_ITEM", payload: props})}><i className={`bx bx-x ${x}`}></i></div>
                </div>
            </div>
        </>
    );
};

export default CartItems;
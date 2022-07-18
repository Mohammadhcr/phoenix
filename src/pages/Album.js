import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../components/root.scss';
import { ShoppingCartContext } from '../context/CartContext';

import database from '../components/database';
import styles from '../components/Album.module.scss';

const Background = styled.div`
        width: 100%;
        height: 100vh;
        background: var(--bodyBack);
        letter-spacing: 0.5px;
        transition: all 0.3s;

        @media screen and (min-width: 120px) and (max-width: 780px){
            height: auto;
        }
    `;

const Album = (props) => {

    const params = useParams();

    const {wrapper, info, album, artist, description, links, artwork, avai, statick, buySection, purchase, priceone, pricetwo} = styles;

    const [cartList, setCartList] = useContext(ShoppingCartContext);

    const addToCart = (props) => {

        const product = {
            album: database[params.id - 1].album,
            artist: database[params.id - 1].artist,
            artwork: database[params.id - 1].artwork,
            price: database[params.id - 1].price,
            id: database[params.id - 1].id,
            key: database[params.id - 1].id,
        }

        setCartList((currState) => {
            return [...currState, product];
        })
    };
    
    return (
        <Background>
            <div className={wrapper}>
                <div className={info}>
                    <h1 className={album}>{database[params.id - 1].album}</h1>
                    <h2 className={artist}>{database[params.id - 1].artist}</h2>
                    <div className={description}>
                        <div>
                            <span>
                                <span className={statick}>Release Date:</span>
                                {database[params.id - 1].year}
                            </span>
                        </div>
                        <div className={buySection}>
                            <div>
                                <span className={priceone}>Price:</span>
                                <h2 className={pricetwo}>${database[params.id - 1].price}</h2>
                            </div>
                            <button onClick={addToCart} className={purchase}><i className='bx bx-cart'></i> Add to Cart</button>
                        </div>
                    </div>
                    
                    <h2 className={avai}>Also available on:</h2>
                    <div className={links}>
                        <a href={database[params.id - 1].spotify} target="_blank"><i className='bx bxl-spotify'></i> Spotify</a>
                        <a href={database[params.id - 1].apple} target="_blank"><i className='bx bxl-apple'></i> Apple Music</a>
                        <a href={database[params.id - 1].soundcloud} target="_blank"><i className='bx bxl-soundcloud'></i> SoundCloud</a>
                    </div>
                </div>
                <div className={artwork}>
                    <img src={database[params.id - 1].artwork} alt="artwork" />
                </div>
            </div>
        </Background>
    );
};

export default Album;
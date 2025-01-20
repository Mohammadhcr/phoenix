import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../context/CartContextProvider';
import { isInCart } from '../components/functions';


import database from '../components/database';
import styles from '../styles/Album.module.scss';

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

const Album = () => {

    const params = useParams();

    const {wrapper, info, album, artist, description, links, artwork, avai, statick, buySection, purchase, priceone, pricetwo, purchased} = styles;

    const data = database[params.id - 1]

    const {state, dispatch} = useContext(CartContext);
    
    return (
        <Background>
            <div className={wrapper}>
                <div className={info}>
                    <h1 className={album}>{data.album}</h1>
                    <h2 className={artist}>{data.artist}</h2>
                    <div className={description}>
                        <div>
                            <span>
                                <span className={statick}>Release Date:</span>
                                {data.year}
                            </span>
                        </div>
                        <div className={buySection}>
                            <div>
                                <span className={priceone}>Price:</span>
                                <h2 className={pricetwo}>${data.price}</h2>
                            </div>
                            {
                                isInCart(state, data.id) ?
                                <button className={purchased}><i className='bx bx-check'></i> Added to Cart!</button> :
                                <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})} className={purchase}><i className='bx bx-cart'></i> Add to Cart</button>
                            }
                            
                        </div>
                    </div>
                    
                    <h2 className={avai}>Also available on:</h2>
                    <div className={links}>
                        <a href={data.spotify} target="_blank"><i className='bx bxl-spotify'></i> Spotify</a>
                        <a href={data.apple} target="_blank"><i className='bx bxl-apple'></i> Apple Music</a>
                        <a href={data.soundcloud} target="_blank"><i className='bx bxl-soundcloud'></i> SoundCloud</a>
                    </div>
                </div>
                <div className={artwork}>
                    <img src={data.artwork} alt="artwork" />
                </div>
            </div>
        </Background>
    );
};

export default Album;
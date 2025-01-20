import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Card.module.scss';

const Card = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardSubtitle} = styles;
    const {artwork, artist, album, id} = props;

    return (
        <div className={card}>
            <Link to={`/album/${id}`}>
                <div className={cardPhoto}>
                    <img src={artwork} alt="Artwork" />
                </div>
                <div className={cardContent}>
                    <h2 className={cardTitle}>{album}</h2>
                    <h3 className={cardSubtitle}>{artist}</h3>
                </div>
            </Link>
        </div>
    );
    
};

export default Card;
import React from 'react';
import Footer from '../components/Footer';

import Card from './Card';
import styles from './Cards.module.scss';
import database from './database'; 

const Cards = () => {
    return (
        <>
        <section>
            <div className={styles.sectionTitle}>
                <h2>Albums</h2>
            </div>
            <div className={styles.cards}>
                {database.map(card => <Card key={card.id} id={card.id} album={card.album} artist={card.artist} artwork={card.artwork} />)}
            </div>
        </section>
        <Footer />
        </>
    );
    
};

export default Cards;
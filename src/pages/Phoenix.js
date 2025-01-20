import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Phoenix.module.scss';

const Phoenix = () => {

    const {main, logoAndName, button} = styles;

    return (
       <>
            <div className={main}>
                <div className={logoAndName}>
                    <h1>Phoenix</h1>
                    <h3>The Music Store</h3>
                </div>
                <div className={button}>
                    <Link to="/album">OPEN</Link>
                </div>
            </div>
        </>
    );
};

export default Phoenix;
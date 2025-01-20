import React from 'react';

import styles from '../styles/Footer.module.scss';

const Footer = () => {
    
    return (
        <footer>
            <div className={styles.mohammadhcr}><p>Created by <span>Mohammad hcr</span></p></div>
            <div className={styles.copyright}><p>&copy; 2022 | All Rights Reserved</p></div>
        </footer>
    );

};

export default Footer;
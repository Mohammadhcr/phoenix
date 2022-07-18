import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    
    return (
        <footer>
            <div className={styles.mohammadhcr}><p>Created by "Mohammad hcr"</p></div>
            <div className={styles.copyright}><p>&copy; 2022 - All Rights Reserved</p></div>
        </footer>
    );

};

export default Footer;